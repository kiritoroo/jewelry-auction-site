import { useAuthContext } from "@context/AuthContext";

import * as S from "./CartManager.styled";

interface Props {}

export const CartManager = (props: Props) => {
  const { user } = useAuthContext();

  console.log(user);

  return (
    <>
      <S.Wrapper>
        Your Cart
        <S.container>
          <S.cart>
            <S.cartImage>Hinhf anhr</S.cartImage>
            <S.cartName>Name: kim cuong</S.cartName>
            <S.cartAmount>
              Amount:
              <S.cartAmountInput type="number" min="1"></S.cartAmountInput>
            </S.cartAmount>
            <S.cartPrice>Price: 100000</S.cartPrice>
            <S.btnDelete>Delete</S.btnDelete>
          </S.cart>
        </S.container>
        {/* 2 */}
        <S.container>
          <S.cart>
            <S.cartImage>Hinhf anhr</S.cartImage>
            <S.cartName>Name: kim cuong</S.cartName>
            <S.cartAmount>
              Amount:
              <S.cartAmountInput type="number" min="1"></S.cartAmountInput>
            </S.cartAmount>
            <S.cartPrice>Price: 100000</S.cartPrice>
            <S.btnDelete>Delete</S.btnDelete>
          </S.cart>
        </S.container>
        <S.btnBuy>Payment</S.btnBuy>
      </S.Wrapper>
    </>
  );
};
