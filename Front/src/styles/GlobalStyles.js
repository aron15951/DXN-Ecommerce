import { createGlobalStyle } from "styled-components";

//Importar fuentes (local)
import IntegralCF from "../assets/fonts/IntegralCF/Integralcf-bold.ttf";
import Satoshi from "../assets/fonts/Satoshi/Satoshi-Regular.otf";

export const GlobalStyle = createGlobalStyle`
/* Estilos globales */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/*Defimos fuentes*/
@font-face {
    font-family: 'IntegralCF';
    src: url(${IntegralCF});
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
    font-family: 'Satoshi';
    src: url(${Satoshi});
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

h1 {
    font-family: 'IntegralCF';
}
`;
