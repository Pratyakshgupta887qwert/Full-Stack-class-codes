import React from 'react'
import './App.css'
import Mycomponents from './Mycomponents.jsx'

function App() {

  return (
    <>
      {/* functional component (props) */}
      <Mycomponents name="pratyaksh" age= {32} marks= {90} single ={true} />
      <Mycomponents name="arun" age= {32} marks= {90}  single ={false} />
      <Mycomponents name="akash" age= {32} marks= {90} single ={true} />
    </>
  )
}

export default App
