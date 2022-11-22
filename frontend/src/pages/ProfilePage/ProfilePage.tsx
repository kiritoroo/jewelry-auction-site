import React, { useEffect } from "react";
import * as S from './ProfilePage.styled'
import { Layout } from '@comp/Layout/Layout'
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

interface Props {

}

export default function ProfilePage(props: Props) {
  const navigate = useNavigate()
  const { user } = useAuthContext()

  useEffect(() => {
    if (user.username === null) navigate('/login')
  }, [])

  return (
    <>
      <Layout>
        <S.Wrapper>
          Profile Page
        </S.Wrapper>
      </Layout>
    </>
  )
}