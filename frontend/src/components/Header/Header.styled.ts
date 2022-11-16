import styled from "styled-components";
import { motion } from "framer-motion";

import { media } from "@style/media";

export const Header = styled(motion.header)`
  display: flex;
  align-items: stretch;
  border-bottom: var(--b-md) solid;
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--c-white);
`

const BaseWrapper = styled.div`
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
`

export const LogoWrapper = styled(BaseWrapper)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0px;
  bottom: 0;
  right: 0;
  width: 110px;
  height: 110px;
  z-index: 11;
  background-color: var(--c-white);
  border-right: var(--b-md) solid;
  border-bottom: var(--b-md) solid;
  &:hover {
    cursor: crosshair;    
  }
  img {
    max-width: 100%;
    display: block;
  }
`

export const MarqueeWrapper = styled(BaseWrapper)`
  width: 100%;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  div {
    font-size: 1.2em;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`

export const BrandWrapper = styled(BaseWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-left: 2px solid;
  h1 {
    font-size: 1.5em;
    font-weight: 500;
  }
`

export const Grid = styled.div`
  display: grid;
  width: 80%;
  margin: 0;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0.5em;
    background: linear-gradient(to left, white 50%, salmon 50%) right;
    background-size: 200%;
    transition: .3s ease-out;
    &:hover {
      background-position: left;
      cursor: crosshair;    
    }
    a {
      color: #000;
      text-decoration: none;
      &:hover {
        cursor: crosshair;    
      }
    }
  }

  & > :nth-child(1), & :nth-child(2) {
    border-bottom: var(--b-sm) solid;
    border-left: var(--b-sm) solid;
  }
  & :nth-child(3), & :nth-child(4) {
    border-left: var(--b-sm) solid;
  }
`