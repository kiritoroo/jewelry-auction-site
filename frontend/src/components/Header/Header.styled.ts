import styled from "styled-components";
import { motion } from "framer-motion";

import { media } from "@style/media";

export const Header = styled(motion.header)`
  display: flex;
  align-items: stretch;
  border-bottom: 2px solid;
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

export const BrandWrapper = styled(BaseWrapper)` 
  border-right: 2px solid;
  h1 {
    font-size: 1.5em;
    font-weight: 500;
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

export const LogoWrapper = styled(BaseWrapper)`
  border-left: 2px solid;
  img {
    max-width: 100%;
    display: block;
  }
`