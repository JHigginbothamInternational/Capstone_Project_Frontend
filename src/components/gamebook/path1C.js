import React from "react"
import { NavLink } from "react-router-dom"

export default function Path1C() {
    
        return (
            <div className="content-wrapper-game">
                <div className="adventure-text">
                    <h2>Sit down if you want to live...<br /><br />
                    As you read the last word, you react!<br /><br />
                    Just as your butt hits the seat, you instinctively lift your legs off the floor.<br /><br />
                    You can hear the current of electricity run through the floor for a couple of seconds and die out.<br /><br />
                    You breathe a sigh of relief, but the monitor starts to whir and burr with a new message...<br /><br /><br /><br />
                    </h2>
                </div>
                <div className="adventure-choices">

                    <button className="gbtn"><NavLink path="/path1E" to="/path1E">What does it say?</NavLink></button>          
                    
                </div>
            </div>
        )
    }
