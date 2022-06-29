import { useState } from "react";
import "./card.scss";

function Card(props){
    const [visible, setVisibility]=useState(false);
    function showHide(){
        setVisibility(!visible);
        console.log("...", visible)
    }
    function paragraphe(){
        if (!visible) return;
        return (<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolor officiis veniam omnis commodi laudantium harum ex, unde sequi nam consequatur, voluptas voluptatem est vel recusandae! At deserunt sint molestiae.</p>)
    }
    return (
        <article className="card">
            <h2 onClick={showHide}>{props.titre}</h2>
            {paragraphe()}
        </article>
    )
}



export default Card;