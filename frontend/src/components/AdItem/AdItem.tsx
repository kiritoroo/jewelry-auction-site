import React from "react"
import { BackendAd } from "@type/types";

import  * as S from './AdItem.styled'

interface Props {
  ad: BackendAd
}

export const AdItem = (props: Props) => {
  const { ad } = props

  return (
    <>
      { ad ? (
        <S.Wrapper>
          <S.Title>{ad.product_name}</S.Title>
          <S.ImageWrapper>
            <S.Image src={ad.image}/>
            <S.ImageCaption>@{ad.created_by}</S.ImageCaption>
          </S.ImageWrapper>        
        </S.Wrapper>
      ): null }
    </>
  )
}