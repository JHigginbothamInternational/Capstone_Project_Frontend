import React from "react"
import { NavLink } from "react-router-dom"
import App from "../components/app"
import Cookies from "js-cookie"

export default function Navbar() {
    
    

    return (
        <div className="navbar-wrapper">

            <div className="navlinks-wrapper">
                <NavLink exact path="/" to="/">Home</NavLink>
                <NavLink path="/about" to="/about">About</NavLink>
                <NavLink path="/character" to="/character">Character Creator</NavLink>
                {/* <NavLink path="/quote" to="/quote" >Quote</NavLink>
                <NavLink path="/about" to="/about" >About</NavLink> */}
            </div>



            <div className="profile-wrapper">
                <h2>Username</h2>
                <h1>()</h1>  {/* logo */}
            </div>
        </div>
   )
}