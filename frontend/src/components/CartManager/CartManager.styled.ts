import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 70px;
`;

export const container = styled.div``;

export const cart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-radius: 5px;
  border-bottom: 1px solid #333;
`;

export const cartImage = styled.div`
  height: 50px;
  width: 50px;
  background-color: black;
`;
export const cartName = styled.div``;
export const cartAmount = styled.div``;
export const cartPrice = styled.div``;
export const cartAmountInput = styled.input`
  width: 50px;
`;
export const btnDelete = styled.button`
  width: 80px;
  height: 50px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      #f5ce62,
      #e43603,
      #fa7199,
      #e85a19
    );
    box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
  }
`;
export const btnBuy = styled.button`
  &:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    background-image: linear-gradient(
      to right,
      #25aae1,
      #40e495,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
    cursor: pointer;
  }
  width: 80px;
  height: 50px;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 1270px;
`;
