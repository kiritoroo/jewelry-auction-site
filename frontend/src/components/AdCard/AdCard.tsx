import React from "react";
import { BackendAd } from "@type/types";
import { useAuthContext } from '@context/AuthContext'

import * as S from './AdCard.styled'

interface Props {
  ad: BackendAd
}

export const AdCard = (props: Props) => {
  const { ad } = props
  const { user } = useAuthContext()

  return (
    <>
      <S.Wrapper>
        <S.Title>
          {ad.product_name}
        </S.Title>
        <S.ImageWrapper>
          <S.Image src={ad.image}/>
          <S.ImageCaption>@{ad.created_by}</S.ImageCaption>
        </S.ImageWrapper>
        <S.Description>{ad.description}</S.Description>
        <S.PriceWrapper>
          <S.Price>${ad.current_price}</S.Price>
          <S.Status># {ad.status}</S.Status>
        </S.PriceWrapper>
        <S.Time>Remaining: 22m 10s</S.Time>
        { ad.status === 'ongoing'? (
          <S.HoverWrapper>
            <S.Button to={`/ad/${ad.id}`}>Tham gia</S.Button>
          </S.HoverWrapper>
        ): null }
      </S.Wrapper>
    </>
  )
}