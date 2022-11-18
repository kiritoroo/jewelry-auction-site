import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5em;
  text-align: center;
`

export const WrapperAd = styled.div`
  margin-top: 10em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1.5em;
  column-gap: 2em;
  align-items: flex-start;
  text-align: justify;
`

export const FilterWrapper = styled.div`
  position: absolute;
  top: clamp(100px, 10%, 200px);
  left: 10%;
  z-index: 3;
`

export const Dropdown = styled.div`
  display: inline-block;
  margin: 20px 50px;
  label {
    border: 3px solid;
    position: relative;
    z-index: 2;
    transition: all 0.3s;
    backface-visibility: hidden;
    font-weight: 500;
  }
  input {
    transition: all 0.3s;
    backface-visibility: hidden;
    display: none;
    &:checked + label {
      background: #FA8072;
    }
    &:checked ~ ul {
      visibility: visible;
      opacity: 1;
      top: 0;
      li {
        border-left: 2px solid;
        border-right: 2px solid;
        border-bottom: 2px solid;
      }
    }
  }
  ul {
    position: relative;
    visibility: hidden;
    opacity: 0;
    top: -20px;
    z-index: 1;
    transition: all 0.3s;
    backface-visibility: hidden;
    li {
      border: 2px solid #fff;
      transition: all 0.3s;
      backface-visibility: hidden;
    }
  }
  label, li {
    display: block;
    width: clamp(100px, 20vw, 200px);
    background: #FFF;
    padding: 15px 20px;
    &:hover {
      background: #FA8072;
      border-left: 2px solid;
      border-right: 2px solid;
      border-bottom: 2px solid;
      cursor: crosshair;
    }
  }
`

export const Search = styled.div`

`