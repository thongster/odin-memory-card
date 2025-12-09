import { useState } from 'react'
import Grid from './components/Grid.jsx'
import Score from './components/Score.jsx'
import './styles/modern-normalize.css'
import './styles/App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [selectedChars, setSelectedChars] = useState([])

  return (
    <div className="container">
      <p>{selectedChars.map(id => <span>{id}, </span>)}</p>
      <Score currentScore={currentScore} highScore={highScore} />
      <Grid setCurrentScore={setCurrentScore} setHighScore={setHighScore} setSelectedChars={setSelectedChars} />
    </div>
  )
}

export default App
