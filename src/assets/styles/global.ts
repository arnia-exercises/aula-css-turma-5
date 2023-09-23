import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

`

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 45px auto 0;
`