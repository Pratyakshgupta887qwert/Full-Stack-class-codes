import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App ,{Data} from './App.jsx'
import Name from './Newfile.jsx'
import Login from './Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
      <Data/>
      <Name/>
      <Login/>

  </StrictMode>,
)
