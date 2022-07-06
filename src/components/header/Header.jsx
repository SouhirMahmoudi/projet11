import logo from "./logo.svg"
import { NavLink } from 'react-router-dom'
 
function Header() {
    return (
        <div className="navbar">
        <nav>
            <NavLink to="/"><img className="logo" src={logo}/></NavLink>
        <div className="navLinks">
            <NavLink to="/home">Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
            </div> 
        </nav>
        </div>
    )
}

export default Header

