import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

import { useGetAd } from "@hook/useQueries";
import { AdItem } from "@comp/AdItem/AdItem"

import  * as S from './AdManager.styled'

export const AdManager = () => {
  const { adId } = useParams()
  const { refetch, data, status } = useGetAd(adId!)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>
      <S.Wrapper>
        { data?.data ? (
          <S.Grid>
            <S.WrapperItem>
              <AdItem ad={data.data}/>
            </S.WrapperItem>
            <S.WrapperLog>

            </S.WrapperLog>
            <S.WrapperUser>

            </S.WrapperUser>
            <S.WrapperChat>

            </S.WrapperChat>
          </S.Grid>
        ): null }

      </S.Wrapper>
    </>
  )
}