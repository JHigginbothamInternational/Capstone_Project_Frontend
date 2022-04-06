import React from "react"
import { NavLink } from "react-router-dom"

export default function Path1D() {
    
        return (
            <div className="content-wrapper-game">
                <div className="adventure-text">
                    <h2>First your body locks and you begin to burn.<br /><br />
                    You've just been shocked and your entire body is numb.<br /><br />
                    That was quite a shocking ending...<br /><br /><br /><br />
                    Can you get further?<br /><br /><br /><br />
                    </h2>
                </div>
                <div className="adventure-choices">

                    <button className="gbtn"><NavLink path="/game" to="/game">Wake up</NavLink></button>         
                    
                </div>
            </div>
        )
    }
