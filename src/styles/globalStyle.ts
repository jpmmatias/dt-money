import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
     --background: #f0f2f5;
     --red:#e52e4d;
     --blue:#5429cc;
     --blue-light:#6933ff;
     --text-body:#969cb3;
     --green: #33cc95;
     --shape:#ffffff;
    }

    *,
    *::after,
    *::before {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width:1000px){
            font-size: 93.75%;
        }
        @media(max-width:728px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background) ;
        -webkit-font-smoothin: antialiased;
    }
    body, input, text-area,button{
        font-family:'Poppins', sans-serif;
        font-weight:400;
    }
    h2,h2,h3,h4,h5,h6, strong{
        font-weight:600;
    }
    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor:not-allowed;
    }
`;
export default GlobalStyle;
