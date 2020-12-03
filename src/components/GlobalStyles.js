import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
  
}

body {
    background: #1b1b1b;
    font-family: "Playfair Display", serif;
    overflow-x: hidden;
}

button {
    font-family: "Playfair Display", serif;
    font-weight: bold;
    font-weight: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid  #cf347c;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
        background-color:  #cf347c;
        color: white;
    } 
}

h2 {
        font-weight: lighter;
        font-size: 4rem;
    }
h3 {
        color: white;
    }
h4 {
        font-weight: bold;
        font-size: 2rem;
    }
span {
        font-weight: bold;
        color: #cf347c;
    }
a {
        font-size: 1.1rem;
    }
p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;

export default GlobalStyles;
