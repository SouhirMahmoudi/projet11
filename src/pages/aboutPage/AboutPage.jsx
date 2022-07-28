import React from "react";
import Header from "components/header/Header";
import AboutBanner from "components/aboutBanner/AboutBanner"
import Collapsible from "components/collapsible/Collapsible";
import dataAbout from "./dataAbout";
import "./aboutPage.scss"
export default function AboutPage(){

    return(
<React.Fragment>
    <Header
    current={0}/>
    <AboutBanner/>
    <div className="AboutCollapsible">
    {dataAbout.map((about) => (
          <Collapsible 
          key={about.title}
          title={about.title}
          text={about.text}
          rotate={true}
          folded={true}
          />
          ))}
          </div>
   
</React.Fragment>

    );

}