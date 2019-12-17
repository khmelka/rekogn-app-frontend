import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Auth} from 'aws-amplify'

export default class Signup extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        nameError: "",
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
        if (this.state.name === "") {
            this.setState({
                nameError: "Cannot be empty"
            })
        }

        if (this.state.name === "") {
            this.setState({
                emailError: "Cannot be empty"
            })
        }

        if (this.state.name === "") {
            this.setState({
                passError: "Cannot be empty"
            })
        }

        else {
            this.setState({
                name: "",
                email: "",
                password: "",
                nameError: "",
                emailError: "",
                passError: ""
            })

            console.log("validated")
        }
    }
   

    render() {
        const {nameError, emailError, passError} = this.state
        return (  
                <div className="signinMainContainer">
                    <div className="row">
                        <div className="col-md-4 col-md-4 col-md-12">
                         <form className="form-container" onSubmit={this.handleSubmit}>
                            <div className="mainname">
                                <h1 className="name">Welcome</h1>
                              </div>
                                    <div className="form-group">
                                        <input type="name" 
                                                className="form-control" 
                                                aria-describedby="firstnameHelp" 
                                                placeholder="Name" 
                                                name="name"  
                                                value = {this.state.name}
                                                onChange={this.handleUserInput}
                                         />
                                         <div style={{ fontSize: 12, color: "red" }}>
                                             {nameError}
                                         </div>
                                     </div>
                                        
                                            

                                    <div className="form-group">
                                        <input type="email" 
                                            className="form-control" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Enter email" 
                                            name="email" 
                                            value = {this.state.email}
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
                                            value = {this.state.password}
                                            onChange={this.handleUserInput} 
                                        />
                                        <div style={{ fontSize: 12, color: "red" }}>
                                             {passError}
                                         </div>
                                     </div>
                                      <div>
                                    {/* <button type="submit" className="btn btn-info" id="btn1"><Link to="/login">LogIn</Link></button> */}
                                    {/* <p>already a member?</p> */}
                                    <button type="" className="btn btn-info" id="btn2">Create User</button>
                                    </div>
                             </form>


                        </div>
                        <div className="col-md-4 col-md-4 col-md-12"></div>
                        </div>
                  </div>
                
        
        )
    }
}
