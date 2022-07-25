import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #FFFFFF;
  }

  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    color: var(--color-text);

  }

  body, #root {
    background: var(--color-background);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    width: 100vw;
  }
  body, input, button, textarea {
	font-family: 'Source Sans Pro', sans-serif;

  }
 
  button {
    cursor: pointer;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
  }
  ul{
    list-style: none;
  }
`;
