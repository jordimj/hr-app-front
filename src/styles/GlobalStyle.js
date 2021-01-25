import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root,
    #root>div {
        min-height: 100vh;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        background-color: white;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
        text-align-last: center;
        font-size: calc(10px + 2vmin);
        @fontface {
            font-family: 'Poppins', sans-serif;
            src: url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        }
    }
`;
