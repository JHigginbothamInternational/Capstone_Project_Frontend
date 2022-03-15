import React from "react"
import { NavLink } from "react-router-dom"
import App from "../components/app"
import Cookies from "js-cookie"

export default function Navbar() {
    
    

    return (
        <div className="navbar-wrapper">
            <div className="logo">
                <h2>Insert Logo Here</h2>
            </div>

            <div className="navlinks-wrapper">
                <NavLink exact path="/" to="/">Home</NavLink>
                {/* <NavLink path="/quote" to="/quote" >Quote</NavLink>
                <NavLink path="/about" to="/about" >About</NavLink> */}
            </div>

        </div>
   )
}