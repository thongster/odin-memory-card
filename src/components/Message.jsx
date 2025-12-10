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
        <span>
          You picked the same character twice. Click any card to try again.
        </span>
      </p>
    )
  }

  return <div className="message">{content}</div>
}
