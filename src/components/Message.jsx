import '../styles/Message.css'

export default function Message({ gameState }) {
  let content

  if (gameState === 'Start') {
    content = (
      <p>{"Click a card to begin. Don't pick the same character twice!"}</p>
    )
  } else if (gameState === 'InGame') {
    content = <p>Keep going! Choose a new character — no repeats.</p>
  } else if (gameState === 'GameOver') {
    content = (
      <p>
        <b>Game Over!</b>{' '}
        <span>You picked the same character twice. Try again.</span>
      </p>
    )
  } else if (gameState === 'Win') {
    content = (
      <p>
        <b>You win!</b> Play again.
      </p>
    )
  }

  return <div className="message">{content}</div>
}
