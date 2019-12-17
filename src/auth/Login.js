import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {

    state = {
        email: "",
        password: "",
        emailError: "",
        passError: ""
    }

    handleUserInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.email === "") {
            this.setState({
                emailError: "Enter Valid Email"
            })
        }
        if (this.state.password === "") {
            this.setState({
                passError: "Enter Valid Password"
            })
        }
        else {
            this.setState({
                email: "",
                password: "",
                emailError: "",
                passError: ""
            })
            console.log("logged in")
        }
    }
    
    render() {
        const {emailError, passError} = this.state
        return (
       
                <div className="signinMainContainer">
                    <div className="row">
                        <div className="col-md-4 col-md-4 col-md-12">
                         <form className="form-container" onSubmit={this.handleSubmit} >
                                <div className="form-group">
                                    <div className="mainname">
                                    <h1 className="name">Welcome</h1>
                                    </div>
                                        <input type="email" 
                                            className="form-control" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Enter email" 
                                            name="email" 
                                            value= {this.state.email}
                                            onChange={this.handleUserInput}
                                        />
                                        <div style={{ fontSize: 12, color: "red" }}>
                                             {emailError}
                                         </div>
                                 </div>
                                    <div className="form-group">
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                placeholder="Password" 
                                                name="password" 
                                                value= {this.state.password}
                                                onChange={this.handleUserInput}
                                            />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                             {passError}
                                         </div>
                                           </div>
                                      <div>
                                    <button type="submit" className="btn btn-info" id="btn1">Login</button>
                                    <p>already a member?<Link to="/signup" className="signup">SignUp</Link></p>
                                    </div>
                             </form>


                        </div>
                        <div className="col-md-4 col-md-4 col-md-12"></div>
                        </div>
                  </div>
                
        
        )
    }
}
