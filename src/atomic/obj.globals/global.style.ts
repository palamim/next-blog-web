import { createGlobalStyle } from "styled-components";
import { Breakpoint, Color } from "src/atomic/obj.constants/constants";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{ 
    background-color: ${Color.Background};
    font-family: 'Lora', serif;
    color: ${Color.GrayXDark};
  }

  a {
    color: ${Color.Primary};
  }

  @media (min-width: 0px){
    html{
      font-size: 12px;
    }
  }

  @media (min-width: ${Breakpoint.Desktop}){
    html{
      font-size: 14px;
    }
  }

  @font-face {
    font-family: 'Lora';
    src: url('/fonts/lora-regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lora';
    src: url('/fonts/lora-bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`;
