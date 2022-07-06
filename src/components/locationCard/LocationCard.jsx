
import "./locationCard.scss";

import React from 'react'
import { NavLink } from 'react-router-dom';
import logements from './logements.json';

export default function LocationCard(props) {
  return (
    <article style={{backgroundImage: `url('${logements.cover}')`}} className='card'>
      <NavLink className='card-link' to={`/`}>
        <p className="card-title">{logements.title}</p>
      </NavLink>
    </article>
    )
}


