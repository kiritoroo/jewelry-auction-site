import styled from "styled-components";

export const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  margin-bottom: 2em;
`

export const Grid = styled.div`
  display: grid;
  transition: all 0.2s ease-in-out;
  margin: auto;
  grid-gap: 1.25em;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 0.9fr);
  grid-template-areas: 
		"log item item item"
		"log chat chat user";
`

export const WrapperItem = styled.div`
  grid-area: item;
  border: var(--b-md) solid;
  box-shadow: 0.5em 0.5em 0 0 #ddd;
`

export const WrapperLog = styled.div`
  grid-area: log;
  border: var(--b-md) solid;
`

export const WrapperUser = styled.div`
  grid-area: user;
  border: var(--b-md) solid;
`

export const WrapperChat = styled.div`
  grid-area: chat;
  border: var(--b-md) solid;
`