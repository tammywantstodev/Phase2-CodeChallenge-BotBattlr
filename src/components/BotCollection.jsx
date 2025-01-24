import React, {useState, useEffect} from 'react'

export default function BotCollection({onAddBot}) {
const [bots, setBots] = useState([])

    useEffect(() => {
        fetch('../../db.json')
        .then(res => res.json())
        .then(data => setBots(data.bots))
    }, [])

    const handleDeleteBot = (botId) => {
        fetch(`http://localhost:3000/bots/${botId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    // Update the state to remove the deleted bot
                    setBots(bots.filter((bot) => bot.id !== botId));
                } else {
                    console.error("Failed to delete the bot.");
                }
            })
            .catch((error) => console.error("Error:", error));
    };

    return (
        <div>
            <h1>Bot Collection</h1>
            <ul>
            {bots.map((bot) => (
                <li key={bot.id}>
                    <img src={bot.avatar_url} alt={bot.name}/>
                    <h3>Name: {bot.name}</h3>
                    <p>Health: {bot.health}</p>
                    <p>Damage: {bot.damage}</p>
                    <p>Bot Class: {bot.bot_class}</p>
                    <p>Catchphrase: {bot.catchphrase}</p>
                    <span>                    <button onClick={() => onAddBot(bot)}>Add to Army</button>
                        <button onClick={() => handleDeleteBot(bot.id)}>❌</button>
 </span>
                </li>
            ))}
            </ul>
        </div>
    )

}