import React, { useState } from "react";
import './collapsible.scss'


function Collapsible(props) {
  const [folded, setFolded] = useState(props.folded);
  function foldUnfold() {
    setFolded(!folded);
  }

  return (
    <div className="Collapsible">
      <button type="button" className="collapsible" onClick={foldUnfold}>{props.title}</button>
      <div className="content">
        {!folded && <p>{props.text}</p>}
      </div>
    </div>
  );
}


export default Collapsible