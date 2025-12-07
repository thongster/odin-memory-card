import { useState } from 'react'
import "../styles/Score.css"

export default function Score() {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    return (
        <div className="score">
            <p>Current Score: {currentScore}</p>
            <p>High Score: {highScore}</p>        
        </div>
    )
}