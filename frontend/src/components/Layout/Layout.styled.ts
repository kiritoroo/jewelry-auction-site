import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  min-width: 90vw:
  min-height: 90vh; 
  max-width: 95vw;
  max-height: 95vh;
  width: 95vw;
  height: 95vh;
  margin: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  border: var(--b-bg) solid;
  z-index: 99;
  /* pointer-events: none;
  user-select: none; */
  &::-webkit-scrollbar {
    background: #ddd;
    width: 16px;
  }
  &::-webkit-scrollbar-thumb {
    background: #404040;
    border: 5px solid #ddd;
  }
`