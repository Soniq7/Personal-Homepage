import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        background: ${({ theme }) => theme.colors.background.lightBackground};
        color: ${({ theme }) => theme.colors.text.darkText};
        font-family: 'League Spartan', sans-serif;
        line-height: 1.5;
        margin: auto;
    }
`;
