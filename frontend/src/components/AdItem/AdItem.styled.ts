import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: #fff;
  position: relative;
  transition: 0.3s ease;
`

export const Title = styled.h3`
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 2em;
  font-weight: 400;
`

export const ImageWrapper = styled.figure`
  order: 1;
  position: relative;
`

export const Image = styled.img`
  max-width: 30%;
  width: 100%;
  display: block;
`

export const ImageCaption = styled.figcaption`
  position: absolute;
  bottom: 0;
  background-color: #fff;
  padding: 0.5em 1.5em 0.5em 0.5em;
  border-radius: 0 0.75em 0 0;
  z-index: 1;
  font-size: 1.5em;
  margin-left: -1px;
  margin-bottom: -1px;
`