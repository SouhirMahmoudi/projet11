import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import HomeBanner from 'components/homeBanner/HomeBanner';
import Gallery from 'components/gallery/Gallery'
export default function Home() {
  return (
    <React.Fragment>
       <Header
    current={1}/>
      <HomeBanner />
      <Gallery />
      <Footer />
   </React.Fragment>
  );
}
