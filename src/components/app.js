import React, { Component } from "react";
import { Switch, Route } from "react-router";
import axios from "axios";

import Navbar from "./navbar"
import Footer from "./footer"
import Home from "./pages/home"
import About from "./pages/about"
import Character from "./pages/character"
import Auth from "./pages/auth"
import Game from "./pages/game";
import Path1 from "./gamebook/path1";
import Path2 from "./gamebook/path2"

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "Offline"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "Online"
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "Offline"
    });
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "Offline"
    });
  }

  checkLoginStatus() {
    return axios
      .post("http://127.0.0.1:5000/user/login", {
        withCredentials: true
      })
      .then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        if (loggedIn && loggedInStatus === "Online") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "Offline") {
          this.setState({
            loggedInStatus: "Online"
          });
        } else if (!loggedIn && loggedInStatus === "Online") {
          this.setState({
            loggedInStatus: "Offline"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  } 

  render() {
    return (
      <div className='app'>
        <div className="page-wrapper">
          <Navbar loggedInStatus={this.state.loggedInStatus} handleSuccessfulLogout={this.handleSuccessfulLogout} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/character" component={Character} />
            <Route
                path="/auth"
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />
            <Route path="/game" component={Game} />
            <Route path="/path1" component={Path1} />
            <Route path="/path2" component={Path2} />
          </Switch> 
        </div>
      </div>
    );
  }
}
