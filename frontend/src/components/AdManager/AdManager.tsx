import React from "react";

import { useGetAds } from "@hook/useQueries";
import { BackendAd } from "@type/types";
import { AdCard } from "@comp/AdCard/AdCard";

import  * as S from './AdManager.styled'

export const AdManager = () => {

  const { refetch, data, status } = useGetAds()

  return (
    <>
      <S.Wrapper>
        Danh sách vật phẩm
        <S.WrapperAd>
            { data?.data.map((ad: BackendAd) => (
              <AdCard key={ad.id} ad={ad}/>
            )) }
        </S.WrapperAd>
      </S.Wrapper>
    </>
  )
}