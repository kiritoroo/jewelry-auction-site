import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 3em;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5em;
  text-align: center;
`

export const WrapperAd = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1.5em;
  column-gap: 1.5em;
  align-items: flex-start;
  text-align: justify;
`