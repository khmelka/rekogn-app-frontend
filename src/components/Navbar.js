import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-dark bg-primary">
                    <p className="navbar-brand" >Navbar</p>
                    <div className="navbar-nav">
                            <p className="navbar-brand" >Private</p>
                            <p className="navbar-brand" >Private</p>
                        </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        
                    </div>
                    </nav>    
            </div>
        )
    }
}

export default Navbar
