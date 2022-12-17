import React from "react";
import { useAuthContext } from "@context/AuthContext";

import * as S from "./CartManager.styled";

interface Props {}

export const CartManager = (props: Props) => {
  const { user } = useAuthContext();

  console.log(user);

  return (
    <>
      <S.Wrapper>Cart page</S.Wrapper>
    </>
  );
};
