import React from "react";
import { useAuthContext } from '@context/AuthContext'
import { LoginForm } from '@comp/Forms/LoginForm/LoginForm'
import { UserProfile } from "@comp/UserProfile/UserProfile"

import * as S from './UserManager.styled'

interface Props {

}

export const UserManager = (props: Props) => {
  const { user } = useAuthContext()

  return (
    <>
      <S.Wrapper>
        { user.username === null 
          ? <LoginForm/> 
          : <UserProfile user={user}/> }
      </S.Wrapper>
    </>
  )
}