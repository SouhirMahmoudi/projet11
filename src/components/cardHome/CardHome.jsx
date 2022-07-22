import React from 'react'
import { NavLink } from 'react-router-dom';
import "../cardHome/cardHome.scss";
import PropTypes from "prop-types";



function CardHome(props) {
  return (
    // <article style={{backgroundImage:`url('${props.img}')`}} alt={` ${props.title}`} className='card'>
    //   <NavLink className='card-link' to={`/locations/${props.id}`}>
    //     <p className="card-title">{props.title}</p>
    //   </NavLink>
    // </article>
    <article className='card'>
      <img src={props.img} alt={props.title} />
      <NavLink to={`/locations/${props.id}`}>{props.title}</NavLink>
    </article>
    )
}
CardHome.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};
export default CardHome
