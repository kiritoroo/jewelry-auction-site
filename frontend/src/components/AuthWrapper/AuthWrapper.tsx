import React, { useEffect, useState } from "react";

import { useAuthContext } from "@context/AuthContext";
interface Props {
  children: React.ReactNode
}

export const AuthWrapper = (props: Props) => {
  const { children } = props
  const [ isChecked, setIsChecked ] = useState(false)
  
  const { serializeUser } = useAuthContext()

  useEffect(() => {
    const jwt = window.localStorage.getItem('JWT')
    if (jwt) serializeUser(jwt)
    setIsChecked(true)
  }, [serializeUser])

  return (
    <>
      { isChecked && children }
    </>
  )
}