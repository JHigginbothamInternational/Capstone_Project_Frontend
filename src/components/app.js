import React, { Component } from "react";
import { Switch, Route } from "react-router";

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
  

  render() {
    return (
      <div className='app'>
        <div className="page-wrapper">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/character" component={Character} />
            <Route path="/auth" component={props => <Auth {...props} handleSuccessfulAuth={this.handleSuccessfulAuth} handleUnsuccessfulAuth={this.handleUnsuccessfulAuth} />} />
            <Route path="/game" component={Game} />
            <Route path="/path1" component={Path1} />
            <Route path="/path2" component={Path2} />
          </Switch>

          <Footer /> 

          {/* <SmokeElement
          smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
          smokeOpacity="0.5"
          /> */}

        </div>
      </div>
    );
  }
}
