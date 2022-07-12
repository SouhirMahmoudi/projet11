import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";
import logo from 'assets/logo.png'
export default function Header() {

    return (
        <div className="header">
            <img src={logo} alt="Kasa LOGO" />
            <div className="navbar">
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </div>
        </div>
    )

}