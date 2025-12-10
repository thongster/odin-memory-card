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
        const shuffled = shuffleList(data.items)
        setCharList(shuffled)
      } catch {
        console.log('error')
      }
    }
    fetchData()
    // return () => controller.abort()
  }, [])

  // function shuffleCards() {
  //   setCharList((prev) => {
  //     const shuffled = [...prev]

  //     for (let i = shuffled.length - 1; i > 0; i--) {
  //       // Generate a random index from 0 to i
  //       const j = Math.floor(Math.random() * (i + 1));

  //       // Swap elements array[i] and array[j]
  //       [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  //     }

  //     return shuffled
  //   })
  // }

  function shuffleList(list) {
    const arr = [...list]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  function shuffleCards() {
    setCharList((prev) => {
      shuffleList(prev)
    })
  }

  function gameOver() {
    // set high score only if current score is higher
    if (currentScore > highScore) {
      setHighScore(currentScore)
    }
    shuffleCards() // shuffle cards
    setCurrentScore(0) // reset score
    setSelectedChars([]) // clear selected chars array
    setGameState('GameOver')
  }

  function handleCardClick(char) {
    // if not selected yet, game keeps going
    if (!selectedChars.includes(char.id)) {
      setGameState('InGame')
      shuffleCards()
      setSelectedChars((prev) => [...prev, char.id])
      setCurrentScore((prev) => prev + 1)
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
