import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("userdata:", userData);

    this.getUserByUserData(userData);
  };

  getUserByUserData(userData) {
    const { email, password } = userData;
    return new Promise((resolve, reject) => {
      axios
        .get(`/pasport/gettoken?email=${email}&&password=${password}`)
        .then((res) => {
          const user = res.data;
          const { email } = user;

          const results = users.map((user) => {
            return {
              email: email.signup,
              password: password.signup,
            };
          });
          resolve(results);
        })
        .catch((err) => reject(err));
    });
  }

  render() {
    return (
      <div>
        <div class="container center">
          <div class="card has-text-centered is-wide card-content">
            <h1 class="go-green">Be Green</h1>

            <img src="/assets/images/recyclelogo.jpg" alt-pro="img"></img>

            <form class="login animated fadeIn delay-0.5s">
              <div class="field">
                Register
                <p class="control has-icons-left has-icons-right">
                  <input
                    onChange={this.handleChange}
                    value={this.state.email}
                    type="email"
                    placeholder="Email"
                    name="email"
                  />

                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    onChange={this.handleChange}
                    value={this.state.password}
                    class="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <button
                    class="button is-info is-light"
                    onClick={this.handleSubmit}
                  >
                    Register
                  </button>
                </p>
              </div>
              <p>
                Or login <a href="/login">here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;