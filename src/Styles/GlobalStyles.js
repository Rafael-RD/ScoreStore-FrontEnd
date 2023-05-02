import { createGlobalStyle } from "styled-components";
import { mainColor } from "../constants/colors.js";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{   
        color: white;
        font-family: 'Bungee', cursive;
        background-color: ${mainColor};
    }
`;

export default GlobalStyles;