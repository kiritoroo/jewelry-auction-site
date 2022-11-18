import React from 'react'

import * as S from './Container.styled'

interface  Props {
  children: React.ReactNode
}

export const Container = (props: Props) => {
  const { children } = props
  
  return (
    <>
      <S.Wrapper>
        {children}
      </S.Wrapper>
    </>
  )
}