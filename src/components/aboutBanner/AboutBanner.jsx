import bannerAbout from 'assets/bannerAbout.png';
import './AboutBanner.scss'


export default  function HomeBanner() {
  return(
      <div className="banner about">
        <img src={bannerAbout} alt="bannière" />
      </div>
    ) 
  }