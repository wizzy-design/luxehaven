import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    * {
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
    }

    *::-webkit-scrollbar {
    width: 1px;
    }

    *::-webkit-scrollbar-track {
    background: transparent;
    }

    *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
    }
`;

export default GlobalStyle;
