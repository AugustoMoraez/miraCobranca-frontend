import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body,#root,html{
        height: 100%;
        background-color: #FBF9F6;
    }

`;