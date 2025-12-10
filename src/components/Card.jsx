import '../styles/Card.css'

export default function Card({ handleCardClick, charList }) {
  return (
    <>
      {charList.map((char) => (
        <div
          key={char.id}
          className="card"
          onClick={() => handleCardClick(char)}
        >
          <img src={char.image} alt="" />
          <div className="cardText">
            <h2>{char.name}</h2>
            <p>Race: {char.race}</p>
            <p>Ki: {char.ki}</p>
          </div>
        </div>
      ))}
    </>
  )
}
