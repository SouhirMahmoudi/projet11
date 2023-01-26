import React from "react";
import Rating from "components/rating/Rating";
import "./locationCard.scss"
import Tag from "components/tag/Tag";
import PropTypes from "prop-types";

export default function LocationCard(props){
 

  return (
    <div className="locationCard">
      <div>
        <h3 className="title">{props.title}</h3>
        <p className="location">{props.location}</p>
        <div className="tags">
          {props.tags.map((tag,index)=> (
            <Tag 
            key={index}
            tag={tag}
            index={index} 
            />
          ))}
        </div>
        
      </div>
      <div className="profil">
        <div className="host">
          <p className="name">
            {props.host.name.split(" ")[0]} <br />
            {props.host.name.split(" ")[1]}
          </p>
          <img
            className="picture"
            src= {props.host.picture}
            alt="utilisateur"
          />
        </div>
    <div className="rating">
      <Rating 
      rating={props.rating}/>
    </div>
      </div>
    </div>
  );
}
LocationCard.propTypes = {
  title : PropTypes.string,
  rating:  PropTypes.number,
  host: PropTypes.object,
  location: PropTypes.string, 
  tags:PropTypes.object 

}

