import React from "react";
import Header from "components/header/Header";
import AboutBanner from "components/aboutBanner/AboutBanner"
import Collapsible from "components/collapsible/Collapsible";
import dataAbout from "./dataAbout";
export default function AboutPage(){

    return(
<React.Fragment>
    <Header />
    <AboutBanner/>
    <div className="AboutCollapsible">
    {dataAbout.map((about) => (
          <Collapsible 
          key={about.title}
          title={about.title}
          text={about.text}
          />
          ))}
          </div>
   
</React.Fragment>

    );

}