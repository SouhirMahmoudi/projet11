
import Rating from "components/rating/Rating";
export default function LocationCard(props){
    const tags = props.tags;

    return (
      <div className="LocationCard">
        <div>
          <h3 className="title">{props.title}</h3>
          <p className="location">{props.location}</p>
          <div className="tags">
            {tags.map((tag) => (
              <p className="tag" key={tag}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="profil">
          <div className="host">
            <p className="name">
              {props.host.name} <br />
              {props.host.name}
            </p>
            <img
              className="picture"
              src={props.host.picture}
              alt="utilisateur"
            />
          </div>
          <div className="rating">
            <Rating rating={props.rating} />
          </div>
        </div>
      </div>
    );
  
}
