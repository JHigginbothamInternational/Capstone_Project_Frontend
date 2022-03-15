import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Cookies from "js-cookie"

import Home from "./pages/home"
import Navbar from "./navbar"
import Footer from "./footer"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="page-wrapper">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/auth" component={props => <Auth {...props} handleSuccessfulLogin={this.handleSuccessfulLogin} />} /> */}
          </Switch>

          <Footer />
        </div>       
      </div>
    );
  }
}
