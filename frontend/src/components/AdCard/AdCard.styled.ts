import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: var(--b-md) solid;
  padding: 1em;
  background-color: #fff;
  box-shadow: 0.5em 0.5em 0 0 #ddd;
  position: relative;
  transition: 0.3s ease;
  &::after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.25);
    /* transition: 0.3s ease; */
    transform: scale(0);
  }
  &:hover {
    box-shadow: 0 0 0 0;
  }
  &:hover::after {
    transform: scale(1);
  }
`

export const Title = styled.h3`
  margin-top: 1em;
  font-size: 1.5em;
`

export const ImageWrapper = styled.figure`
  order: -1;
  position: relative;
`

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  display: block;
`

export const ImageCaption = styled.figcaption`
  position: absolute;
  bottom: 0;
  background-color: #fff;
  padding: 0.5em 1em 0.5em 0.25em;
  border-radius: 0 0.75em 0 0;
  z-index: 1;
  font-size: 1.2em;
  margin-left: -1px;
  margin-bottom: -1px;
`

export const Description = styled.p`
  margin-top: 0.5em;
  font-size: 0.875em;
`

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`

export const Price = styled.p`
  background-color: #404040;
  color: #fff;
  padding: 0.875em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: -1.5em;
  padding-left: 1em;
  font-size: 1.2em;
  font-weight: 600;
`

export const Status = styled.p`
  background-color: #ddd;
  padding: 0.875em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const Category = styled.p`

`

export const Time = styled.p`

`