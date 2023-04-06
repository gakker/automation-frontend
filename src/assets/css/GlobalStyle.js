import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --main-color: #6259ca;
    --green-color: #68d831;
    --orange-color: #d89430;
    --light-grey-color: #B5B5B5;
    --grey-color: #707787;
    --error-color: #d32f2f;
  }

  * {
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
    text-transform: capitalize;
  }
  body  {
    background: ${({ theme }) => theme.body} !important;
    overflow-x: hidden;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box_shadow {
    box-shadow: 0px 2px 3px #d1d1d1 !important;
  }

  .btn {
    background: linear-gradient(
    to bottom right,
    #6259ca 0%,
    #6259ca99 100%
  ) !important;
    color: #fff !important;
    box-shadow: 0 7px 12px 0 #6259ca33;
}

  .text_initial {
    text-transform: initial;
  }
  .primary_color {
    background: ${({ theme }) => theme.primaryColor} !important;
    color: ${({ theme }) => theme.text} !important;
  }
  .text {
    color: ${({ theme }) => theme.text} !important;
  } 

  .border {
    border-color: ${({ theme }) => theme.border} !important;
    color: ${({ theme }) => theme.border} !important ;
    &::placeholder  {
      color: ${({ theme }) => theme.border} !important ;
    }
  }
   
  input {
    text-transform: initial !important;
    &::placeholder  {
      opacity: 1 !important;
    }
  }

  /* menu of profile  */
 .MuiMenu-list  {
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
     
 }

 /* profile icon on navbar  */
 .css-c0htq5-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper:before  {
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
    }

  .fw_bold {
    font-weight: bold !important;
  }
  .icon_style {
    box-shadow: 0px 2px 3px #d1d1d1;
    padding: 10px 10px;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
      transition: 0.3s;
    }
  }
`;

export default GlobalStyle;
