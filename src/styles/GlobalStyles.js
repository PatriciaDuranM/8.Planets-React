import { createGlobalStyle } from 'styled-components';
import './normalize.css';
import { FONT_FAMILY } from './FontsStyles';
import { COLORS } from './Colors';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        margin:0;
        font-family:${FONT_FAMILY.spartan};
        background-color:${COLORS.darkblue};
        background-image: url('/assets/images/background-stars.svg');
    }

`;
