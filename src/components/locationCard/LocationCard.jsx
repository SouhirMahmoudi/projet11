import Rating from "components/rating/Rating";


export default function LocationCard(props){
 

  return (
    <div className="locationCard">
      <div>
        <h3 className="title">{props.title}</h3>
        <p className="location">{props.location}</p>
        
      </div>
      <div className="profil">
        <div className="host">
          <p className="name">
            {props.host.name.split(" ")[0]} <br />
            {props.host.name.split(" ")[1]}
          </p>
          <img
            className="picture"
            src= {props.host.picture}
            alt="utilisateur"
          />
        </div>
        
      </div>
    </div>
  );
}

