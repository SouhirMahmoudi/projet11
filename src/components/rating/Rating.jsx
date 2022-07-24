import React from "react";
import "./rating.scss";
import star from "assets/starR.png"

export default function Rating(props) {
  let stars = [];
  for (let i = 1; i <6; i++) {
    let starColor;
    i > parseInt(props.rating) ? starColor = "Gray" : starColor = "Red";

    stars.push(
      <span key={i}>
        <img
          src= {star}
          className={starColor}
          alt="note du logement "
        />
      </span>
    );
  }
    return stars;



 
}



