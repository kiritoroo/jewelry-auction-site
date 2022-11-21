import React from "react";
import { Layout } from '@comp/Layout/Layout'
import * as S from'./RegisterPage.styled'

interface Props {

}

export default function RegisterPage(props: Props) {

  return  (
    <>
      <Layout>
        <S.Wrapper>
          <div>
            <S.Label>Tên người dùng</S.Label>
            <S.Input type='text'placeholder=""/>
            <S.Label>Địa chỉ Email</S.Label>
            <S.Input type='email'placeholder=""/>
            <S.Label>Số điện thoại</S.Label>
            <S.Input type='text'placeholder=""/>
            <S.Label>Mật khẩu</S.Label>
            <S.Input type='password'placeholder=""/>
            <S.Label>Nhập lại mật khẩu</S.Label>
            <S.Input type='password'placeholder=""/>
            <S.Grid>
              <S.Button>Đăng ký</S.Button>
            </S.Grid>
          </div>
        </S.Wrapper>
      </Layout>
    </>
  )
}