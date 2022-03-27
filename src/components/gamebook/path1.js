import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default function Path1() {
    
        return (
            <div className="content-wrapper-game">
                <div className="adventure-text">
                    <h2>Great choice.  For what reason?</h2>
                </div>
                <div className="adventure-choice">

                    <button><NavLink path="/" to="/">Another Direction</NavLink></button>
                    <button><NavLink exact path="/game" to="/game">Home</NavLink> </button>
                    <button><NavLink path="/" to="/">Another Direction</NavLink></button>          
                    
                </div>
            </div>
        )
    }
