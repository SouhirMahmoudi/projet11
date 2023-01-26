import React from "react";
import PropTypes from "prop-types"

export default function Tag(props){
    
    return (
        <span className="tag">
            {props.tag}
        </span>
    )


}
Tag.propTypes={
tag: PropTypes.string
}