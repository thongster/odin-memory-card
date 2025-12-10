import { useState } from 'react'
import Card from './Card.jsx'
import '../styles/Grid.css'

export default function Grid({ handleCardClick }) {
  return (
    <div className="grid">
      <Card handleCardClick={handleCardClick} />
    </div>
  )
}
