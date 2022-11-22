import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import jwt_decode from 'jwt-decode';

type Props = {
  children: React.ReactNode
}

export interface LoginJWT {
  scopes: Scope[];
  exp: number;
  sub: string;
}

export type Scope = 'ADMIN' | 'USER';

export interface User {
  username: string | null;
  scope: Scope | null;
  tokenExpiration: number | null;
  accessToken: unknown | null;
}

type AuthContextTypes = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  serializeUser: (userToken: string) => void;
  logoutUser: () => void;
}


const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

const userDefault: User = {
  scope: null,
  username: null,
  accessToken: null,
  tokenExpiration: null,
};

export const AuthContextProvider = React.memo<Props>(props => {
  const { children } = props

  const logoutTimeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [user, setUser] = useState<User>(userDefault)

  const logoutUser = React.useCallback(() => {
    setUser(userDefault)
    localStorage.removeItem('JWT');
    toast.info('You have been logged out')
  }, [])

  const serializeUser = React.useCallback(
    (userToken: string) => {
      const decoded = jwt_decode(userToken) as LoginJWT
      //Check if token is not expired
      const endDate = new Date(decoded.exp * 1000)
      const startDate = new Date();
      const miliSecondsDifference = endDate.getTime() - startDate.getTime();
      if (miliSecondsDifference <= 0) return logoutUser();
      
      window.localStorage.removeItem('JWT');
      window.localStorage.setItem('JWT', userToken);

      setUser({
        accessToken: userToken,
        // scope: decoded.scopes[0].toUpperCase() as Scope,
        scope: 'USER',
        username: decoded.sub,
        tokenExpiration: decoded.exp,
      })


      toast.success('Login successful!')
    }, [logoutUser]
  )

  useEffect(() => {
    const timeout = logoutTimeoutId.current;

    if (user.tokenExpiration) {
      const endDate = new Date(user.tokenExpiration * 1000);
      const startDate = new Date();
      const miliSecondsDifference = endDate.getTime() - startDate.getTime();

      //Log out the user after the time has expired
      logoutTimeoutId.current = setTimeout(() => {
        logoutUser()
      }, miliSecondsDifference)
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [logoutUser, user])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        serializeUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
})

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }
  return ctx
}

AuthContext.displayName = 'AuthContext'
AuthContextProvider.displayName = 'AuthContextProvider'