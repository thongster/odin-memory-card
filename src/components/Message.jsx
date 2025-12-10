import '../styles/Message.css'

export default function Message({ message, setMessage, gameState }) {
  if (gameState === "Start") {
    setMessage("Click a card to begin. Don't pick the same character twice!")
  } else if (gameState === "InGame") {
    setMessage("Keep going! Choose a new character — no repeats.")
  } else if (gameState === "GameOver") {
    setMessage("<h3>Game Over!</h3> You picked the same character twice. Click any card to try again.")
  }

  return <div className="message">{message}</div>
}
