import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* html, body, #root {
        max-width: 100vw;
        max-height: 100vw;

        width: 100%;
        height: 100%;
    } */

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Barlow', sans-serif;
    }

    :root {
        --blue: #3ebeff;
        --softRed: hsl(7, 99%, 70%);
        --yellow: hsl(51, 100%, 49%);
        --darkDesaturatedCyan: hsl(167, 40%, 24%); //graphic design text
        --darkBlue: hsl(198, 62%, 26%); //photography text
        --darkModerateCyan: hsl(168, 34%, 41%); //footer

        --veryDarkDesaturatedBlue: hsl(212, 27%, 19%);
        --VeryDarkGrayishBlue: hsl(213, 9%, 39%);
        --darkGrayishBlue: hsl(232, 10%, 55%);
        --grayishBlue: hsl(210, 4%, 67%);
        --white: hsl(0, 0%, 100%);
    }


`;