import { useState } from 'react'
import Grid from './components/Grid.jsx'
import Score from './components/Score.jsx'
import './styles/modern-normalize.css'
import './styles/App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [selectedChars, setSelectedChars] = useState([])

  function gameOver() {
    // set high score only if current score is higher
    if (currentScore > highScore) {
      setHighScore(currentScore)
    }
    setCurrentScore(0) // reset score
    setSelectedChars([]) // clear selected chars array
    // shuffle cards
  }

  function handleCardClick(char) {
    // if not selected yet, game keeps going
    if (!selectedChars.includes(char.id)) {
      setSelectedChars((prev) => [...prev, char.id])
      setCurrentScore((prev) => prev + 1)
    } else {
      gameOver() // reset game
    }
  }

  return (
    <div className="container">
      <p>{selectedChars.map(id => <span key={id}>{id}, </span>)}</p>
      <Score currentScore={currentScore} highScore={highScore} />
      <Grid handleCardClick={handleCardClick} />
    </div>
  )
}

export default App
