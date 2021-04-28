import React from "react";
import "../components/styles/Navbar.css";
import logo from "../images/logo3.png";
class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                        <span className="font-weight-light">Bibliotecas </span>
                        <span className="font-weight-bold">en el Peru</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;