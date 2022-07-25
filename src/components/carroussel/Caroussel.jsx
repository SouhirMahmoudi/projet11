import React from "react";
import { useState } from "react";
export default function Carrousel(props) {

  const [current, setCurrent] = useState(0);
  const length = props.pictures.length;

  const Next = () => {
   setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const Previous = () => {
   setCurrent(current === 0 ? length - 1: current - 1)
  }
 
   function addImg() {
      return (
        <div className="carrousel">
          <img
            className="carrousel img"
            src={props.pictures}
            alt=""
            key={props.pictures}
          />
          <span className="pictureOrder"></span>
        </div>
      );
    }
  
   function addImgWithChevron() {
    return(
    <div className='carousel'>
    <button className='left-button' onClick={Previous}>&lt;</button>
    <button className='right-button' onClick={Next}>&gt;</button>
    {props.pictures.map((slide, index) => {
              return(
                  <div  className={index === current ? 'slide active' : 'slide'} key={index}>
                      {index === current && (<img src={slide} key={slide} alt=""/>)}
                      {index === current && <span className="pictureOrder"></span>}
                  </div>
              )
          })}
  </div>)
  }
  
    return (
      props.pictures.length > 1 ? addImgWithChevron(): addImg()
      )
    }
    /*let spanActive = document.getElementsByClassName(".pictureOrder");
    let pictureActive = document.getElementsByClassName(".carroussel.img")
    let idPicture = props.pictures.indexOf(pictureActive);
    console.log (pictureActive, idPicture,spanActive )

    
   function Next() {
      if (props.pictures.length - 1 > idPicture) {
        pictureActive.id = `${idPicture + 1}`;
        pictureActive.style.opacity = "0";
        pictureActive.src = props.pictures[idPicture + 1];
        pictureActive.style.opacity = "1";
        spanActive.innerHTML = `${idPicture + 2}/${props.pictures.length}`;
      }

      else {
        pictureActive.id = `0`;
        pictureActive.style.opacity = "0";
        pictureActive.src = props.pictures[0];
        pictureActive.style.opacity = "1";
        spanActive.innerHTML = `1/${props.pictures.length}`;
      }
    }

     function Previous(){

      if (idPicture!== 0) {
        pictureActive.id = `${idPicture - 1}`;
        pictureActive.style.opacity = "0";
        pictureActive.src = props.pictures[idPicture - 1];
        pictureActive.style.opacity = "1";
        spanActive.innerHTML = `${idPicture }/${props.pictures.length}`;
      }

      else {
        pictureActive.id = `${props.pictures.length - 1}`;
        pictureActive.style.opacity = "0";
        pictureActive.src = props.pictures.slice(-1);
        pictureActive.style.opacity = "1";
        spanActive.innerHTML = `${props.pictures.length}/${props.pictures.length}`;
      }
    }*/

    
    
  
   

  




