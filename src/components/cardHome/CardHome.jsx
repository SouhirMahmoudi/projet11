import React from 'react'
import { NavLink } from 'react-router-dom';
import "../cardHome/cardHome.scss"

export default function CardHome(props) {
  return (
    <article style={{backgroundImage: `url('${props.cover}')`}} className='card'>
      <NavLink className='card-link' to={`/locations/${props.id}`}>
        <p className="card-title">{props.title}</p>
      </NavLink>
    </article>
    )
}


