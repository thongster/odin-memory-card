import { useState } from 'react'
import Grid from "./components/Grid.jsx"
import Score from "./components/Score.jsx"
import './styles/App.css'

function App() {

  return (

      <div className='container'>
        <Score/> 
        <Grid />
      </div>

  )
}

export default App
