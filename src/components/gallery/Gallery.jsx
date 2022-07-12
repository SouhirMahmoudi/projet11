import React from "react";
import CardHome from 'components/cardHome/CardHome'
import { getAll } from "services/dataManager";

export default function Gallery () {
   const homeData = getAll();
      return (
        <div className="gallery">
          {homeData.map((home) => (
            <CardHome
              key={home.id}
              id={home.id}
              img={home.cover}
              title={home.title}
            />
          ))}
        </div>
      );
    }
  
