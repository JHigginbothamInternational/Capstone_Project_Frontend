import React from "react"
import { NavLink } from "react-router-dom"

export default function Path1A() {
    
        return (
            <div className="content-wrapper-game">
                <div className="adventure-text">
                    <h2>You smack the computer!!<br /><br />
                    It moans and groans and begins to make a horrible hiss, but you can see a faint light coming from the screen.<br /><br />
                    It looks like words.<br /><br />
                    Should you lean in closer to read what it says, or back away to see if it does anything else?<br /><br /><br /><br />
                    </h2>
                </div>
                <div className="adventure-choices">

                    <button className="gbtn"><NavLink path="/path1C" to="/path1C">Read the computer</NavLink></button>
                    <button className="gbtn"><NavLink path="/path1D" to="/path1D">Back away slowly</NavLink></button>          
                    
                </div>
            </div>
        )
    }
