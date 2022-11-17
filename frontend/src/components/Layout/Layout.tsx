import React from 'react'

import { Header } from "@comp/Header/Header"

import * as S from './Layout.styled'

interface  Props {
  children: React.ReactNode
}

export const Layout = (props: Props) => {
  const { children } = props
  
  return (
    <>
      <S.Wrapper>
        <Header/>
        {children}
      </S.Wrapper>
    </>
  )
}