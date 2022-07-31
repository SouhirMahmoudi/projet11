import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";
import logo from 'assets/logo.png'
import { useState } from 'react';

export default function Header(props) {


    const [isActive, setIsActive] = useState(false);
    function SetActive() {
        setIsActive(!isActive)
    }
    const [isActive2, setIsActive2] = useState(false);
    function SetActive2() {
        setIsActive2(!isActive)
    }
    return (
        <div className="header">
            <img src={logo} alt="Kasa LOGO" />
            <div className="navbar">
                <Link className={props.current === 1 || isActive ? 'lien active' : 'lien'}
                    onClick={SetActive} to="/">Accueil</Link>
                <Link className={props.current === 0 || isActive2 ? 'lien active' : 'lien'}
                    onClick={SetActive2} to="/about">A Propos</Link>
            </div>
        </div>
    )

}