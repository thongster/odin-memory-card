import { useState, useEffect } from 'react'
import Message from './components/Message.jsx'
import Grid from './components/Grid.jsx'
import Score from './components/Score.jsx'
import './styles/modern-normalize.css'
import './styles/App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [selectedChars, setSelectedChars] = useState([])
  const [charList, setCharList] = useState([])
  const [gameState, setGameState] = useState('Start') // "Start", "InGame", "GameOver"

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://dragonball-api.com/api/characters/',
          { signal }
        )
        const data = await response.json()
        setCharList(data.items)
      } catch {
        console.log('error')
      }
    }
    fetchData()

    // return () => {controller.abort()}
  }, [])

  function shuffleCards(charList) {
    for (let i = charList.length - 1; i > 0; i--) {
      // Generate a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1))

      // Swap elements array[i] and array[j]
      ;[charList[i], charList[j]] = [charList[j], charList[i]]
    }
  }

  function gameOver() {
    // set high score only if current score is higher
    if (currentScore > highScore) {
      setHighScore(currentScore)
    }
    setCurrentScore(0) // reset score
    setSelectedChars([]) // clear selected chars array
    shuffleCards(charList) // shuffle cards
    setGameState('GameOver')
  }

  function handleCardClick(char) {
    // if not selected yet, game keeps going
    if (!selectedChars.includes(char.id)) {
      setGameState('InGame')
      setSelectedChars((prev) => [...prev, char.id])
      setCurrentScore((prev) => prev + 1)
      shuffleCards(charList)
    } else {
      gameOver() // reset game
    }
  }

  return (
    <div className="container">
      <Score currentScore={currentScore} highScore={highScore} />
      <Message gameState={gameState} />
      <Grid handleCardClick={handleCardClick} charList={charList} />
    </div>
  )
}

export default App
