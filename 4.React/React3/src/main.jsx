import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HelloMsg from "./helloMsg.jsx";
import Comp from "./comp.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <Comp/>
      <HelloMsg />


  </StrictMode>,
)
