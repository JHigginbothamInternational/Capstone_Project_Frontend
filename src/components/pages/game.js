import React, { Component } from "react";
import { NavLink } from "react-router-dom"

export default function Game() {
   

        return (
            <div className="content-wrapper-game">
                <div className="adventure-text">
                    <h2>This is the beginning of the story.  You're a person doing person things nothing out of the ordinary.
                        you come across some stuff and you're like "Oh wow".  You have a choice ahead. </h2>
                </div>
                <div className="adventure-choices">

                    <button><NavLink path="/path1" to="/path1">Left</NavLink></button>
                    <button><NavLink exact path="/game" to="/game">Home</NavLink> </button>
                    <button><NavLink path="/path2" to="/path2">Right</NavLink></button>          
                    
                </div>
            </div>
        )
    }