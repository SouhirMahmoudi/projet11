import React from 'react';
import bannerHome from 'assets/banner.png';
import './homeBanner.scss'


export default  function HomeBanner() {
  return(
      <div className="banner">
        <img src={bannerHome} alt="bannière" />
        <p className="message">Chez vous, partout et ailleurs</p>
      </div>
    ) 
  }


