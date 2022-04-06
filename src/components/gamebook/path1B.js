import React from "react"
import { NavLink } from "react-router-dom"

export default function Path1B() {
    
        return (
            <div className="content-wrapper-game">
                <div className="adventure-text">
                    <h2>You hear a click under the desk.<br /><br />
                    You bend down to see what made the click noise and BAM!<br /><br />
                    You're out like a light and you begin to dream.  It's familiar, but you can't seem to remember why.<br /><br /><br /><br />
                    </h2>
                </div>
                <div className="adventure-choices">
                    
                    <button className="gbtn"><NavLink exact path="/game" to="/game">Try to wake up</NavLink> </button>         
                    
                </div>
            </div>
        )
    }
