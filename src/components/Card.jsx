import { useState, useEffect } from 'react'
import "../styles/Card.css"

export default function Card() {
    const [charList, setCharList] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal

        const fetchData = async () => {
            try {
                const response = await fetch('https://dragonball-api.com/api/characters/', {signal})
                const data = await response.json()
                setCharList(data.items)
                console.log(data.items)
            } catch {
                console.log("error")
            }
        }
        fetchData()

        // return () => {controller.abort()}
    }, [])

    return (
        <>
            {char}
            <div className="card">
                <p>{char && charList[0] && charList[0].name}</p>
            </div>
            <div className="card">
                <p>{char && charList[1] && charList[1].name}</p>
            </div>
            <div className="card">
                <p>{char && charList[2] && charList[2].name}</p>
            </div>
        </>

        
    )
}