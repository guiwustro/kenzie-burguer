import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
   --color-background: #FFFFFF;
   --color-white: #FFFFFF;
   --color-primary: #27AE60;
   --color-primary-50: #93D7AF;
   --color-secondary: #EB5757;
   --color-gray-100: #333333;
   --color-gray-50: #828282;
   --color-gray-30: #c8c7c7;
   --color-gray-20: #E0E0E0;
   --color-gray-0: #F5F5F5;
  }

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    color: var(--color-text);

  }

  body, #root {
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    width: 100vw;

  }
  body, input, button, textarea {
  font-family: 'Inter', sans-serif;
  }
 
  button {
    cursor: pointer;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background-color: var(--color-gray-100);
    margin: 0.2rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-gray-30);

    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-gray-20);
  }
  ul{
    list-style: none;
  }
`;
