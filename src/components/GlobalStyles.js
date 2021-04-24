import tw, { GlobalStyles as BaseStyles, theme } from "twin.macro";

import React from "react";
import { createGlobalStyle } from "styled-components";

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
  :root{
    --gutter:12px;
    --gutter-half:6px;
  }
  @media (min-width: ${theme`screens.md`}) {
    :root{
      --gutter:16px;
      --gutter-half:8px;
    }
  }
  @media (min-width: ${theme`screens.lg`}) {
    :root{
      --gutter:20px;
      --gutter-half:10px;
    }
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
