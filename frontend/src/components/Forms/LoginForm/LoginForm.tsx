import React, { useEffect, useState } from "react";
import * as S from'./LoginForm.styled'
import { loginPOST } from '@util/apiQueries/apiAccount'
import { useAuthContext } from '@context/AuthContext'
import { Form, useNavigate } from 'react-router-dom'

interface Props {

}

export const LoginForm = (props: Props) => {
  const navigate = useNavigate()
  const { serializeUser } = useAuthContext();

  const initialForm = {
    username: "",
    password: ""
  }

  const [formData, setFormData] = useState(initialForm)

  const onFormDataChange = (field: string, data: any) => {
    setFormData((prevState) => (
      { ...prevState, [field]: data}
    ))
  }

  const onSubmitHandler = async (e: any) => {
    e.preventDefault()
    try  {
      const res = await loginPOST({ ...formData })
      console.log(res)
      if (res.status !== 200) {
        console.log('API Error')
      } else {
        serializeUser(res.data.access_token);
      }
    } catch(err) {
      console.log('API Error: ' + err)
    }
  }

  return  (
    <>
      <S.Wrapper>
        <S.Form onSubmit={onSubmitHandler}>
          <S.Label>Tên người dùng</S.Label>
          <S.Input
            type="text"
            value={formData['username']}
            onChange={(e) => {
              return onFormDataChange('username', e.target.value)}
            }
          />
          <S.Label>Mật khẩu</S.Label>
          <S.Input
            type="password"
            autoComplete=""
            value={formData['password']}
            onChange={(e) => {
              return onFormDataChange('password', e.target.value)}
            }
          />
          <S.Grid>
            <S.Button>Đăng nhập</S.Button>
            <S.LinkButton type="submit" to={'/register'}>Đăng ký</S.LinkButton>
          </S.Grid>
        </S.Form>
      </S.Wrapper>
    </>
  )
}