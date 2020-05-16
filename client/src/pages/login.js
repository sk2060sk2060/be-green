import React, {Component} from "react"
import axios from "axios"
import {
    BrowserRouter as Router,
    Link,
    Redirect,
  } from "react-router-dom";

class Login extends Component {

state={
    email:"",
    password:"",
    login: false,
}


handleChange = (event)=>{
    const { name, value } = event.target;
    console.log(name, value)
    this.setState({
      [name]: value
    });

}

handleSubmit = async (event) => {
    event.preventDefault();
    var userData = {
      email:this.state.email,
      password: this.state.password
    };
    console.log("send login userdata:", userData)
 
    const response = await axios.post("/api/users/checkuser", userData);
    const { status, message } = response.data;
    console.log({ status, message });

    if (status === 'ok') {
      this.setState({ login: true })

    }

    // axios call to the route 
    // if (!userData.email || !userData.password) {
    //     return;
    //   }
      // If we have an email and password, run the signUpUser function
    //  signUpUser(userData.email, userData.password);

}
    
render(){
    if (this.state.login === true) return <Redirect to="/active"></Redirect>
  
    return (
        <div>
            <div class="container center">
                <div class="card has-text-centered is-wide card-content">
                    <h1 class="go-green">Be Green</h1>
       
                        <img src="/assets/images/recyclelogo.jpg" alt-pro="img" ></img>

                           
                                <form class="login animated fadeIn delay-0.5s">
                                    <div class="field">
                                        Login
    
                                        <p class="control has-icons-left has-icons-right">
                                            <input 
                                            onChange ={this.handleChange}
                                            value={this.state.email}
                                             type="email"
                                            placeholder="Email"
                                            name="email" />

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
                                            onChange ={this.handleChange}
                                            value={this.state.password}
                                            class="input" type="password" 
                                            placeholder="Password" 
                                            name="password" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-lock"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="field">
                                        <p class="control">
                                            <button 
                                             class="button is-info is-light"
                                             onClick={this.handleSubmit}>
                                                Login
                                            </button>
                                        </p>
                                    </div>
                                    <p>Or Signup <a href="/register">here</a></p>
                                </form>
               
                  </div>
                  </div>           
</div>
             
)}
    }

 export default Login;