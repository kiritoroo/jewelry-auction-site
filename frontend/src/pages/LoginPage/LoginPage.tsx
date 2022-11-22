import React, { useEffect, useState } from "react";
import { Layout } from '@comp/Layout/Layout'
import * as S from'./LoginPage.styled'
import { loginPOST } from '@util/apiQueries/apiAccount'
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { LineCanvas } from '@comp/Canvas/LineCanvas'

interface Props {

}

export default function LoginPage(props: Props) {
  const navigate = useNavigate()
  const { user, serializeUser } = useAuthContext();

  useEffect(() => {
    console.log(user.username)
    if (user.username != null) navigate('/profile')
  }, [])

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

  const onSubmitHandler = async () => {
    try  {
      const res = await loginPOST({ ...formData })
      console.log(res)
      if (res.status !== 200) {
        console.log('API Error')
      } else {
        console.log('Set Token')
        serializeUser(res.data.access_token);
      }
    } catch(err) {
      console.log('API Error: ' + err)
    }
  }

  return  (
    <>
      <Layout>
        <S.Wrapper>
          <div>
            <S.Label>Tên người dùng</S.Label>
            <S.Input
              type="text"
              placeholder="" 
              onChange={(e) => {
                return onFormDataChange('username', e.target.value)}
              }
            />
            <S.Label>Mật khẩu</S.Label>
            <S.Input
              type='password'
              placeholder="" 
              onChange={(e) => {
                return onFormDataChange('password', e.target.value)}
              }
            />
            <S.Grid>
              <S.Button onClick={onSubmitHandler}>Đăng nhập</S.Button>
              <S.LinkButton type="submit" to={'/register'}>Đăng ký</S.LinkButton>
            </S.Grid>
          </div>
        </S.Wrapper>
        <LineCanvas/>
      </Layout>
    </>
  )
}