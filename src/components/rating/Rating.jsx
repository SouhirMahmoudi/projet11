import React from "react";
import Star from 'assets/star.svg'

export default function Rating(props){
    const stars = [];
    let color = "";
    for (let i = 0; i < 5; i++) {
      props.rating > i ? (color = "#FF6060") : (color = "#E3E3E3");
      stars.push(<Star fill={color} key={i} />);
    }

    return <>{stars}</>;
  }

    


