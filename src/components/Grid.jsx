import Card from './Card.jsx'
import '../styles/Grid.css'

export default function Grid({ handleCardClick, charList }) {
  if (!charList || charList.length === 0) {
    return <p>Loading...</p>
  }
  return (
    <div className="grid">
      {charList.map((char) => (
        <Card key={char.id} char={char} handleCardClick={handleCardClick} />
      ))}
    </div>
  )
}
