import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Cookies from "js-cookie"

import Navbar from "./navbar"
import Footer from "./footer"
import Home from "./pages/home"
import About from "./pages/about"
import Character from "./pages/character"
import Auth from "./pages/auth"

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
            <Route path="/auth" component={props => <Auth {...props} handleSuccessfulAuth={this.handleSuccessfulAuth} />} />
          </Switch>

          <Footer />
        </div>       
      </div>
    );
  }
}
