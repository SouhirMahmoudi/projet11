import React, { useState } from "react";
import PropTypes from "prop-types";
import './collapsible.scss'


function Collapsible(props) {
  const [folded, setFolded] = useState(props.folded);
  function foldUnfold() {
    setFolded(!folded);
  }

  return (
    <div className="Collapsible">
      <button type="button" class="collapsible" onClick={foldUnfold}>{props.title}</button>
      <div class="content">
        {!folded && <p>{props.text}</p>}
      </div>
    </div>
  );
}
Collapsible.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  folded: PropTypes.bool,
};

export default Collapsible