import './Header.css';
import React, { Component } from 'react';
import Logo from '../../assets/logo.svg';

class Header extends Component {
    render() { 
        return ( <div className="header">
            <img src={Logo} className="App-logo" alt="logo"  />
        </div> );
    }
}
 
export default Header;