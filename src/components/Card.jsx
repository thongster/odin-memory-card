import { useState, useEffect } from 'react'
import "../styles/Card.css"

export default function Card() {
    const [char, setChar] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dragonball-api.com/api/characters/')
                const data = await response.json()
                setChar(data)
                
            } catch {
                console.log("error")
            }
        }
        fetchData()
    }, [])

    return (
        <div className="card">
            
        </div>
    )
}