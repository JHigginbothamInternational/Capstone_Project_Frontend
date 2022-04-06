import React from "react"
import { NavLink } from "react-router-dom"

export default function Path2() {
    
        return (
            <div className="content-wrapper-game">
                <div className="adventure-text">
                    <h2>You try to grab the handle of the door.<br /><br />
                    As you touch it, you feel....<br /><br />
                    Incomplete.<br /><br />
                    You don't want to go that way just yet.  Maybe try the other door?<br /><br /><br /><br />

                    </h2>
                </div>
                <div className="adventure-choices">

                    <button className="gbtn"><NavLink path="/path1" to="/path1">Try the other door</NavLink></button>         
                    
                </div>
            </div>
        )
    }
