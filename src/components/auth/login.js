import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class login extends Component {
    state = {
        email: "",
        password: "",
        error: {
            cognito: null,
            blankfield: false
        }
    }
    render() {
        const {emailError, passwordError} = this.state
        return (
       
                <div className="signinMainContainer">
                    <div className="row">
                        <div className="col-md-4 col-md-4 col-md-12">
                         <form className="form-container" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <div className="mainname">
                                    <h1 className="name">Welcome</h1>
                                    </div>
                                        <input type="email" 
                                            className="form-control" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Enter email" 
                                            name="email" 
                                            value={this.state.email} 
                                            onChange={(event) => this.handleUserInput(event)}
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
                                                value={this.state.password} 
                                                onChange={(event) => this.handleUserInput(event)}
                                            />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {passwordError}
                                            </div>
                                      </div>
                                      <div>
                                    <button type="submit" className="btn btn-info" id="btn1">Login</button>
                                    {/* <p>already a member?</p> */}
                                    <button type="" className="btn btn-info" id="btn2"><Link to="/signup">SignUp</Link></button>
                                    </div>
                             </form>


                        </div>
                        <div className="col-md-4 col-md-4 col-md-12"></div>
                        </div>
                  </div>
                
        
        )
    }
}
