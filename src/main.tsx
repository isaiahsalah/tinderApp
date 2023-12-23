import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


import { createGlobalStyle } from "styled-components";
import { Colors } from './assets/Colors.tsx';

export const GlobalStyle = createGlobalStyle`
:root {

font-family:Rubik;
line-height: 1.5;
font-weight: 400;

//color-scheme: light dark;
color: ${Colors.yellow};
background-color: ${Colors.blue};

}


body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
