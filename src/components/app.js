import React, { Component } from "react";
import { Switch, Route } from "react-router";
import axios from "axios";

import Navbar from "./navbar"
import Home from "./pages/home"
import About from "./pages/about"
import Auth from "./pages/auth"
import Game from "./pages/game";
import Path1 from "./gamebook/path1";
import Path1A from "./gamebook/path1A";
import Path1B from "./gamebook/path1B";
import Path1C from "./gamebook/path1C";
import Path1D from "./gamebook/path1D";
import Path1E from "./gamebook/path1E";
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
    if (this.state.loggedInStatus = "Offline") {
      this.setState({
        loggedInStatus: "Offline"
      });
    }
    
  }

  checkLoginStatus() {
    return axios
      .post("https://jrh-capstone-backend.herokuapp.com/user/login", {
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
            <Route exact path="/" render={props => (<Home {...props} />)} />
            <Route path="/about" component={About} />
            <Route path="/auth" render={props => (<Auth {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />
            <Route path="/game" render={props => (<Game {...props} />)} />
            <Route path="/path1" component={Path1} />
            <Route path="/path1A" component={Path1A} />
            <Route path="/path1B" component={Path1B} />
            <Route path="/path1C" component={Path1C} />
            <Route path="/path1D" component={Path1D} />
            <Route path="/path1E" component={Path1E} />
            <Route path="/path2" component={Path2} />
          </Switch> 
        </div>
      </div>
    );
  }
}
