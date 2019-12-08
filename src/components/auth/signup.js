import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class login extends Component {
   

    
    render() {
        return (
       
                <div className="signinMainContainer">
                    <div className="row">
                        <div className="col-md-4 col-md-4 col-md-12">
                         <form className="form-container" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <div className="mainname">
                                    <h1 className="name">Welcome</h1>
                                    </div>
                                    <input type="firstname" 
                                            className="form-control" 
                                            aria-describedby="firstnameHelp" 
                                            placeholder="First Name" 
                                            name="firstname" 
                                            
                                        />
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            
                                        </div>
                                        <input type="lastname" 
                                            className="form-control" 
                                            aria-describedby="lastnameHelp" 
                                            placeholder="Last Name" 
                                            name="lastname" 
                                        />
                                        <input type="email" 
                                            className="form-control" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Enter email" 
                                            name="email" 
                                        />
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            
                                        </div>
                                 </div>
                                    <div className="form-group">
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                placeholder="Password" 
                                                name="password" 
                                            />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                            </div>
                                      </div>
                                      <div>
                                    <button type="submit" className="btn btn-info" id="btn1"><Link to="/login">LogIn</Link></button>
                                    {/* <p>already a member?</p> */}
                                    <button type="" className="btn btn-info" id="btn2">SignUp</button>
                                    </div>
                             </form>


                        </div>
                        <div className="col-md-4 col-md-4 col-md-12"></div>
                        </div>
                  </div>
                
        
        )
    }
}
