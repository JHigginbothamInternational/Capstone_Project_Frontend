import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
    
    return (
        <div className="navbar-wrapper">

            <div className="navlinks-wrapper">
                <NavLink exact path="/" to="/">Home</NavLink>
                <NavLink path="/about" to="/about">About</NavLink>
                <NavLink path="/character" to="/character">Character Creator</NavLink>
                <NavLink path="/game" to="/game">Game</NavLink>
            </div>

            <div className="profile-wrapper">
                <NavLink path="/auth" to="/auth">Login</NavLink>
                <h3>Username</h3>
                <h3>()</h3>  {/* logo */}
            </div>
        </div>
   )
}