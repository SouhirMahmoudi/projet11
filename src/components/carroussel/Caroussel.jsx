import React from "react";
import { useState } from "react";
import "./caroussel.scss";
export default function Carrousel(props) {

  const [current, setCurrent] = useState(0);
  const length = props.pictures.length;

  const Next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const Previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  function addImg() {
    return (
      <div className="caroussel">
        <img
          className="caroussel img"
          src={props.pictures}
          alt=""
          key={props.pictures}
        />
        <span className="pictureOrder"></span>
      </div>
    );
  }

  function addImgWithChevron() {
    return (
      <div className='caroussel'>
        <svg
          className='left-button' onClick={Previous}
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
            fill="white"
          />
        </svg>
        <svg className='right-button' onClick={Next}
        width="48" 
        height="80"
         viewBox="0 0 48 80" 
         fill="none" 
         xmlns="http://www.w3.org/2000/svg">
         <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" 
         fill="white"
         />
         </svg>
        {props.pictures.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (<img src={slide} key={slide} alt="" />)}
              {index === current && <span className="pictureOrder"> {index + "/" + length}</span>}
            </div>
          )
        })}
      </div>)
  }

  return (
    props.pictures.length > 1 ? addImgWithChevron() : addImg()
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











