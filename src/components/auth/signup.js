import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errorText: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }

  handleSubmit(event) {
    axios.post("http://127.0.0.1:5000/user/add",
        {
          username: this.state.username,
          password: this.state.password             
        },
        { withCredentials: true }  
      )
      .then(response => {
        if (response.data === "Account added") {
          this.props.handleSuccessfulAuth();
        } else {
          console.log(response.data)
          this.setState({
            errorText: "Error Occurred"
          });
          this.props.handleUnsuccessfulAuth();
        }
      })
      .catch(error => {
        this.setState({
          errorText: "An error occurred"
        });
        this.props.handleUnsuccessfulAuth();
        console.log(error)
      });
                  
    event.preventDefault();
  };

render() {
    return (
        <div className="content-wrapper-signUp">
            <div className="signUp">
                <h1>SIGN-UP</h1>

                <div>{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
                    <div className="form-group">
                    <input
                        type="text"
                        name="username"
                        placeholder="Your username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    </div>

                    <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Your password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    </div>

                    <button className="btn" type="submit">
                      Submit
                    </button>
                </form>
            </div>           
        </div>
    )
  }
}