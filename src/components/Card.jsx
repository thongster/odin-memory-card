import { useState, useEffect } from 'react'
import "../styles/Card.css"

export default function Card() {
    const [char, setChar] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal

        const fetchData = async () => {
            try {
                const response = await fetch('https://dragonball-api.com/api/characters/', {signal})
                const data = await response.json()
                setChar(data.items)
                console.log(data.items)
            } catch {
                console.log("error")
            }
        }
        fetchData()

        return () => {controller.abort()}
    }, [])

    return (
        <div className="card">
            {char && char[0] && char[0].name}
        </div>
    )
}