import { useState } from 'react'
import Card from './Card.jsx'
import '../styles/Grid.css'

export default function Grid({ setCurrentScore, setHighScore, selectedChars, setSelectedChars }) {
  return (
    <div className="grid">
      <Card setCurrentScore={setCurrentScore} setHighScore={setHighScore} selectedChars={selectedChars} setSelectedChars={setSelectedChars} />
    </div>
  )
}
