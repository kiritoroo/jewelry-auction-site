import React from "react";
import { Layout } from '@comp/Layout/Layout'
import * as S from'./LoginPage.styled'

interface Props {

}

export default function LoginPage(props: Props) {

  return  (
    <>
      <Layout>
        <S.Wrapper>
          <div>
            <S.Label>Địa chỉ Email</S.Label>
            <S.Input type='email'placeholder=""/>
            <S.Label>Mật khẩu</S.Label>
            <S.Input type='password'placeholder=""/>
            <S.Grid>
              <S.Button>Đăng nhập</S.Button>
              <S.LinkButton to={'/register'}>Đăng ký</S.LinkButton>
            </S.Grid>
          </div>
        </S.Wrapper>
      </Layout>
    </>
  )
}