import React, { useState, useEffect } from "react";

import { useGetAds } from "@hook/useQueries";
import { BackendAd } from "@type/types";
import { AdCard } from "@comp/AdCard/AdCard";

import  * as S from './AdManager.styled'

export const AdManager = () => {
  const [checked, setChecked] = useState(false);

  const { refetch, data, status } = useGetAds()

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(Array.from(new Set(data?.data.map((ad: BackendAd) => ad.category))))
    console.log(categories)
  }, [data])

  return (
    <>
      <S.Wrapper>
        <S.FilterWrapper>
          <S.Dropdown>
            <input id="toogle1" type="checkbox" defaultChecked={checked} onChange={() => console.log('pick')}/>
            <label htmlFor="toogle1">Danh mục</label>
            <ul>
              { categories?.sort().map((category: string) => (
                <li key={category}>{category}</li>
              )) }
            </ul>
          </S.Dropdown>
          <S.Search>

          </S.Search>
        </S.FilterWrapper>

        <S.WrapperAd>
            { data?.data.map((ad: BackendAd) => (
              <AdCard key={ad.id} ad={ad}/>
            )) }
        </S.WrapperAd>
      </S.Wrapper>
    </>
  )
}