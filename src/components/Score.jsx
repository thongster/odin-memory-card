import { useState } from 'react'
import '../styles/Score.css'

export default function Score({ currentScore, highScore }) {
  return (
    <div className="score">
      <p>Current Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
    </div>
  )
}
