import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar(props) {

    const handleLogout = () => {
        props.handleSuccessfulLogout()
    }
    
    return (
        <div className="navbar-wrapper">

            <div className="navlinks-wrapper">
                <NavLink exact path="/" to="/">Home</NavLink>
                <NavLink path="/about" to="/about">About</NavLink>
                {/* <NavLink path="/character" to="/character">Character Creator</NavLink> */}
                <NavLink path="/game" to="/game">Game</NavLink>
            </div>

            <div className="profile-wrapper">
                <NavLink path="/auth" to="/auth"><h3>Login</h3></NavLink>
                <NavLink exact path="/" to="/" onClick={handleLogout}><h3>Logout</h3></NavLink>
                <h6>{props.loggedInStatus}</h6>
            </div>
        </div>
   )
}