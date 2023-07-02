import { useState } from 'react'
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import './App.css'

function App() {
  const [render, setRender] = useState("Informate")

  let navToHeader = (layer)=>{
    setRender(layer)
  }


  return (
    <>
      <Header result={render} passData={navToHeader}/>
      <Main layer={render}/>
    </>
  )
}

export default App
