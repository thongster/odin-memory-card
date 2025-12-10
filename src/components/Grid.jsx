import { useState } from 'react'
import Card from './Card.jsx'
import '../styles/Grid.css'

export default function Grid({ handleCardClick, charList }) {
  return (
    <div className="grid">
      <Card handleCardClick={handleCardClick} charList={charList} />
    </div>
  )
}
