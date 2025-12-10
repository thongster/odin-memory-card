import '../styles/Card.css'

export default function Card({ handleCardClick, char }) {

  return (
    <>
      <div className="card" onClick={() => handleCardClick(char)}>
        <img src={char.image} alt={char.name} />
        <div className="cardText">
          <h2>{char.name}</h2>
          <p>Race: {char.race}</p>
          <p>Ki: {char.ki}</p>
        </div>
      </div>
    </>
  )
}
