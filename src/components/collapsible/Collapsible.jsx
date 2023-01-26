import React, { useState } from "react";
import PropTypes from "prop-types";


function Collapsible(props) {
  const [folded, setFolded] = useState(props.folded);
  const [rotate, setRotate] = useState(props.rotate);
  const equipments =props.type;
  function FoldUnfold() {
    setFolded(!folded);
  }
  function Rotate() {
    setRotate(!rotate);
  }

  return (
    <div className="Collapsible">
      <div className="title" onClick={FoldUnfold}>
        {props.title}
        <div
          className="icon" onClick={Rotate}>
          {rotate && <svg

            width="25"
            height="15"
            viewBox="0 0 25 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
              fill="white"
            />
          </svg>
          }
          {
            !rotate && <svg
              width="24"
              height="15"
              viewBox="0 0 24 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
              d="M21.7268 14.1403L23.8597 11.9951L11.9298 0.0764155L-5.01125e-05 12.0072L2.13287 14.1403L11.9298 4.34257L21.7268 14.1403Z" 
              fill="white" 
              />
            </svg>


          }
        </div>
      </div>
      <div>
        {!folded && !equipments && <p className="content">{props.text}</p>}
      </div>
      <div>
        {!folded && equipments && <ul className="content"> {props.text.map((equipment) => (
                    <li key={equipment}> {equipment} </li>)) }</ul>}
                    
      </div>
     <div>
        {folded && <p className="contentInvisible"></p>}
      </div>
    </div>
  );
}

Collapsible.propTypes = {
  folded : PropTypes.boolean,
  rotate:  PropTypes.boolean,
  type: PropTypes.boolean,
  text: PropTypes.string, 
  title:PropTypes.string 

}

export default Collapsible