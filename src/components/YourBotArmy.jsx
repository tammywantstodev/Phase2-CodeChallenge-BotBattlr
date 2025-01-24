import React from "react";

export default function YourBotArmy({bots, onRemoveBot}){
    return (
        <div>
            <h1>Your Bot Army</h1>
            <ul>
                {bots.map((bot) => (
                    <li key={bot.id}>
                        <img src={bot.avatar_url} alt={bot.name}/>
                        <h3>Name: {bot.name}</h3>
                        <p>Health: {bot.health}</p>
                        <p>Damage: {bot.damage}</p>
                        <p>Bot Class: {bot.bot_class}</p>
                        <p>Catchphrase: {bot.catchphrase}</p>
                        <button onClick={()=>onRemoveBot(bot.id)}>Remove Bot</button>

                    </li>
                ))}
            </ul>
        </div>
    )
}