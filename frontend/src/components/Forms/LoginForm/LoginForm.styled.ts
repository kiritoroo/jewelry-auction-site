import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90%;
  top: 0;
`

export const Form = styled.form`
  max-width: 40%;
  min-width: 35%;
  padding: 2em;
  margin-bottom: 2em;
`

export const Label = styled.label`
  width: 100%;
  text-align: left;
  font-size: 1.25em;
  font-weight: 500;
  display: block;
  margin-top: 1.25em;
`

export const Grid = styled.div`
  margin-top: 3em;
  display: grid;
  grid-gap: 3em;
  grid-template-columns: repeat(2, 1fr);
`

export const Button = styled.button`
  border: var(--b-md) solid;
  font-family: "Urbanist", sans-serif;
  background: linear-gradient(to left, white 50%, salmon 50%) right;
  background-size: 200%;
  transition: .3s ease-out;
  padding: 1em 0.5em;
  color: #000;
  font-size: 1.2em;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-position: left;
    cursor: crosshair;    
  }
`

export const LinkButton = styled(Link)`
  border: var(--b-md) solid;
  font-family: "Urbanist", sans-serif;
  background: linear-gradient(to left, white 50%, salmon 50%) right;
  background-size: 200%;
  transition: .3s ease-out;
  padding: 1em 0.5em;
  color: #000;
  font-size: 1.2em;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-position: left;
    cursor: crosshair;    
  }
`

export const Input = styled.input`
  width: 100%;
  margin-top: 0.875em;
  border: 2px solid;
  font-size: 1em;
  padding: 1em;
  transition: 0.3s ease;

  &:focus {
    border-color: transparent;
    outline: none;
    box-shadow: 0 0 0 4px var(--c-red-300);
  }
`