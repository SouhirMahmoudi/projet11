
import React from "react";
import Header from "components/header/Header";
import LocationCard from "components/locationCard/LocationCard";
import { getOne } from "services/dataManager";
import ErrorPage from "pages/errorPage/ErrorPage";
import Collapsible from "components/collapsible/Collapsible";
import Footer from "components/footer/Footer";
import Carrousel from "components/carroussel/Caroussel";
import { useParams } from "react-router-dom";
import "./locationPage.scss"


export default function LocationPage() {
  const id = useParams();
  const idlocation =id.id;
  const home = getOne(idlocation);
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
      <div className="description">
      <Collapsible  folded={true} type={false} text={home.description} title="Description" /> 
      </div>
      <div className="equipement">
      <Collapsible  folded={true} type={true} text={home.equipments} title="Équipements" />
      </div>
    </div>


    <Footer />
    </React.Fragment>
);
 }