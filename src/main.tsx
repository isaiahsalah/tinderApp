import React from 'react'
import ReactDOM from 'react-dom/client'


import { createGlobalStyle } from "styled-components";
import { Colors } from './assets/Colors.tsx';
import App from './App.tsx';

export const GlobalStyle = createGlobalStyle`
:root {

font-family:Rubik;
line-height: 1.5;
font-weight: 400;

//color-scheme: light dark;
color: ${Colors.blue};
background-color: ${Colors.yellow};

}


body {
  margin: 0;
  display: flex;
  place-items: center;
  min-height: 100vh;
}
.gatito{
  position: absolute;
  z-index: -1;
  opacity: 0.5;
  filter: saturate(0);
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  overflow: hidden;
  top: 0;
}
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <img className='gatito' src='https://img.freepik.com/free-photo/beautiful-fluffy-cat-bed-generative-ai_169016-28978.jpg?w=996&t=st=1703366729~exp=1703367329~hmac=c51bc2b02589ed40e760a67d7086c5b6a355bd1bbc85cb5ec82bc886fda9855e'></img>

  </React.StrictMode>,
)
