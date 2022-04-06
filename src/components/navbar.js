import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar(props) {

    const handleLogout = () => {
        props.handleSuccessfulLogout()
    }

    const dynamicLinkOut = (route, linkText) => {
        return (
          <div className="navlinks-wrapper" onClick={handleLogout}>
            <NavLink to={route} activeClassName="navlinks-active">
              {linkText}
            </NavLink>
          </div>
        );
    }

    const dynamicLink = (route, linkText) => {
        return (
          <div className="navlinks-wrapper">
            <NavLink to={route} activeClassName="navlinks-active">
              {linkText}
            </NavLink>
          </div>
        );
    }
 
    return (
        <div className="navbar-wrapper">
            <div className="navlinks-wrapper">
                <NavLink exact path="/" to="/">Home</NavLink>
                <NavLink path="/about" to="/about">About</NavLink>
                {props.loggedInStatus === "Online" ? (
                    dynamicLink("/game", "Game")
                ) : null}
            </div>

            <div className="profile-wrapper">
                {props.loggedInStatus === "Offline" ? (
                    dynamicLink("/auth", "Login")
                ) : null}
                {props.loggedInStatus === "Online" ? (
                    dynamicLinkOut("/", "Logout")
                ) : null}
                <h6>{props.loggedInStatus}</h6>
            </div>
        </div>
   )
}