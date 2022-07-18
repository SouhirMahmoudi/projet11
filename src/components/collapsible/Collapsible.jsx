import React from "react";
import PropTypes from "prop-types";
import './collapsible.scss'
Collapsible.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default  function Collapsible(props) {
    return(
      <div className="Collapsible">
      <button type="button" class="collapsible">{props.title}</button>
      <div class="content">
        <p>{props.text}</p>
      </div>
      </div>
      );

      
    }

    var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}