import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body, input, button, textarea {
        font-family: 'Lora', serif;
    }

    button, select{
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol{
        display: flex;
        flex-direction: row;
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    input, textarea, select{
        border: 0;
        background: transparent;
    }
`
export default Reset