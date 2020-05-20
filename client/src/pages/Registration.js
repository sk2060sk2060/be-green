import React, { Component } from "react";
import axios from "axios";
import "./pages.css";
<<<<<<< HEAD
=======
import {
  BrowserRouter as Router,
  Link,
  Redirect,
} from "react-router-dom";
>>>>>>> 2ba0d0669b97d7168aadc20d1f427638e63eb43f

class Signup extends Component {
  state = {
    login: false,
    email: "",
    password: "",
  };


  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    var userData = {
      email,
      password,
    };
    console.log("userdata:", userData);

    const response = await axios.post("/api/users/register", userData);
    const { status, message } = response.data;
    console.log({ status, message });

    if (status === 'ok') {
      this.setState({ login: true })

    }
    // if( status === 'fail') // show a message to the user


  };

  render() {
    if (this.state.login === true) return <Redirect to="/active"></Redirect>
    return (
      <div>
        <div className="container center">
          <div
            className="card has-text-centered is-wide card-content"
            id="registerbox"
          >
            {" "}
            <h1 className="go-green">Be Green</h1>
            <img src="/assets/images/recyclelogo.jpg" alt-pro="img"></img>
            <form className="login animated fadeIn delay-0.5s">
              {" "}
              <div className="field">
                If you have not registered, please do so now.
                <p className="control has-icons-left has-icons-right">
                  <input
                    id="einput"
                    onChange={this.handleChangeEmail}
                    value={this.state.email}
                    type="email"
                    placeholder="Email"
                    name="email"
                  />

                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    id="pinput"
                    onChange={this.handleChangePassword}
                    value={this.state.password}
                    //className="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button
                    className="button is-info is-light"
                    id="registerbtn"
                    onClick={this.handleSubmit}
                  >
                    Register
                  </button>
                </p>
              </div>
              <p>
                Or login{" "}
                <a href="/login" id="loginbtn">
                  here
                </a>
              </p>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Signup;

//error message
// <div class="row">
// <form class="col s12">
//   <div class="row">
//     <div class="input-field col s12">
//       <input id="email" type="email" class="validate">
//       <label for="email">Email</label>
//       <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
//     </div>
//   </div>
// </form>
// </div>
