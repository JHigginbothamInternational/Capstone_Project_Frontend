import React from "react"
import { NavLink } from "react-router-dom"

export default function Path1() {
    
        return (
            <div className="content-wrapper-game">
                <div className="adventure-text">
                    <h2>As the door creaks open, you notice a table with a computer on it.<br /><br />
                    You walk up to the computer, but before you do anything else, you hear the door behind you slam.<br /><br />
                    Should you continue to check out the computer, or try to go back the way you came?<br /><br /><br /><br />
                    </h2>
                </div>
                <div className="adventure-choices">

                    <button className="gbtn"><NavLink path="/path1A" to="/path1A">Slap the computer</NavLink></button>
                    <button className="gbtn"><NavLink exact path="/path1D" to="/path1D">Try to go back</NavLink> </button>
                    <button className="gbtn"><NavLink path="/path1B" to="/path1B">Press the power button on the computer</NavLink></button>          
                    
                </div>
            </div>
        )
    }
