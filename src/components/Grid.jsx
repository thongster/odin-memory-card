import { useState } from 'react'
import Card from './Card.jsx'
import '../styles/Grid.css'

export default function Grid({ setCurrentScore, setHighScore, setSelectedChars }) {
  return (
    <div className="grid">
      <Card setCurrentScore={setCurrentScore} setHighScore={setHighScore} setSelectedChars={setSelectedChars} />
    </div>
  )
}
