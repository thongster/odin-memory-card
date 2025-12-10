import { useState, useEffect } from 'react'
import '../styles/Card.css'

export default function Card({ setCurrentScore, setHighScore, selectedChars, setSelectedChars }) {
  const [charList, setCharList] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://dragonball-api.com/api/characters/',
          { signal }
        )
        const data = await response.json()
        setCharList(data.items)
        console.log(data.items)
      } catch {
        console.log('error')
      }
    }
    fetchData()

    // return () => {controller.abort()}
  }, [])

  function handleClick(char) {
    setSelectedChars((prev) => [...prev, char.id])
    if (selectedChars.includes(char.id)) {
      setCurrentScore((prev) => prev + 1)
    } 

  }

  return (
    <>
      {charList.map((char) => (
        <div key={char.id} className="card" onClick={() => handleClick(char)}>
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
