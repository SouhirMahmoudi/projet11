import bannerHome from '../homePage/BannerHome.svg';
import '../homePage/homeBanner.scss'


export default  function HomeBanner() {
  return(
      <div className="banner">
        <img src={bannerHome} alt="bannière" />
        <p className="banner message">Chez vous, partout et ailleurs</p>
      </div>
    ) 
  }


