import React, { useEffect, useState } from "react";
import * as S from './UserProfile.styled'
import { Layout } from '@comp/Layout/Layout'
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { User } from '@context/AuthContext'
import { useGetUser } from '@hook/useQueries'

interface Props {
  user: User;
}

export const UserProfile = (props: Props) => {
  const { user } = props
  const navigate = useNavigate()
  const { refetch, data: userData, status } = useGetUser(user.accessToken, user.username)

  console.log(userData?.data)

  return (
    <>
      <S.Wrapper>
        { userData?.data.username }
      </S.Wrapper>
    </>
  )
}