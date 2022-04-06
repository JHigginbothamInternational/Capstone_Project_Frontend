import React from "react";
import { NavLink } from "react-router-dom"

export default function Game() {
   

        return (
            <div className="content-wrapper-game">
                <div className="adventure-text">
                    <h2>You wake up in a room.  You're covered in dust and you're cold.<br /><br />
                    You see two doors ahead of you.  You need to leave this room or you'll freeze.<br /><br />
                    Which door do you choose?<br /><br /><br /><br />
                    </h2>
                </div>
                <div className="adventure-choices">

                    <button className="gbtn"><NavLink path="/path1" to="/path1">Left</NavLink></button>
                    <button className="gbtn"><NavLink path="/path1D" to="/path1D">Stay</NavLink> </button>
                    <button className="gbtn"><NavLink path="/path2" to="/path2">Right</NavLink></button>          
                    
                </div>
            </div>
        )
    }