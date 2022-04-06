import React from "react"
import { NavLink } from "react-router-dom"

export default function Path1E() {
    
        return (
            <div className="content-wrapper-game">
                <div className="adventure-text">
                    <h2>This is as far as you can go.<br /><br />
                    Keep checking back for updates.<br /><br />
                    Scheduled updates will start to be announced on the About page.<br /><br /><br /><br />
                    </h2>
                </div>
                <div className="adventure-choices">

                    <button className="gbtn"><NavLink path="/game" to="/game">Go again?</NavLink></button>          
                    
                </div>
            </div>
        )
    }
