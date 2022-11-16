import React from 'react'
import * as S from './Layout.styled'

import { Header } from "@/components/Header/Header";

export const Layout = () => {

  return (
    <>
      <S.Wrapper>
        <Header/>
      </S.Wrapper>
    </>
  )
}