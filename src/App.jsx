import {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import BotCollection from './components/BotCollection.jsx'
import YourBotArmy from './components/YourBotArmy.jsx'
import NavBar from './components/NavBar.jsx'


function App() {
const [selectedBots, setSelectedBots] = useState([])
    const handleAddBot=(bot)=>{
 // Add the bot to selectedBots if not already present
        if (!selectedBots.some((b) => b.id === bot.id)) {
            setSelectedBots([...selectedBots, bot]);
            alert(`Bot added successfully.`)
        }
        else{
            alert(`Bot is already in your army.`)
        }

    }
    const removeBotFromArmy=(id)=> {
        setSelectedBots(selectedBots.filter((bots) => bots.id !== id))
    }

  return (

          <BrowserRouter>
              <NavBar />
              <Routes>
                  <Route path="/" element={<BotCollection onAddBot={handleAddBot}
                />} />

                  <Route path="/bot-army" element={<YourBotArmy bots={selectedBots} onRemoveBot={removeBotFromArmy}
                   />} />
              </Routes>
          </BrowserRouter>

  )
}

export default App
