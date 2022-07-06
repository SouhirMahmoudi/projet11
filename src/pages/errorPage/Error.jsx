import { Link } from "react-router-dom"
import './errorPage.scss'

export default function Error() {

    return (
        <div className="errorpage">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas !</p>
            <Link className="backhome" to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )

}