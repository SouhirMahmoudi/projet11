
import React from "react";
import Header from "components/header/Header";
import LocationCard from "components/locationCard/LocationCard";
import { getOne } from "services/dataManager";
import ErrorPage from "pages/errorPage/ErrorPage";
import Collapsible from "components/collapsible/Collapsible";
import Footer from "components/footer/Footer";


export default function LocationPage() {
  const { idLocation } = window.location.search.slice(1).toString;
  const home = getOne(idLocation)
  
 return home === undefined ? (
    <ErrorPage />
  )
    
  
 : (
  <React.Fragment>
    <Header />
    <Carrousel pictures={home.pictures} />
    <LocationCard
      title={home.title}
      location={home.location}
      tags={home.tags}
      rating={home.rating}
      host={home.host}
    />
    <div className="collapseHouseBloc">
      <Collapsible text={home.description} title="Description" />
      <Collapsible text={home.equipments} title="Équipements" />
    </div>
    <Footer />
    </React.Fragment>
);
 }