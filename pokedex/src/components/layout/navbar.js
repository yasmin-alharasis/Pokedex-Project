import React, { Component } from 'react';
// import Styled from 'styled-components'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav id="navbar-example2" className="navbar navbar-light bg-light fixed-top">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" href="#">Pokemon API</a>
            </nav>

            );
    }
}
 
export default NavBar;