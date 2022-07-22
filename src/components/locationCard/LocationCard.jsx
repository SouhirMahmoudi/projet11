import Collapsible from "components/collapsible/Collapsible";
import Rating from "components/rating/Rating";


export default function LocationCard(props){
   

  const tags = this.props.tags;

  return (
    <div className="locationCard">
      <div>
        <h3 className="title">{this.props.title}</h3>
        <p className="location">{this.props.location}</p>
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
            {this.props.host.name.split(" ")[0]} <br />
            {this.props.host.name.split(" ")[1]}
          </p>
          <img
            className="picture"
            src={this.props.host.picture}
            alt="utilisateur"
          />
        </div>
        <div className="rating">
          <Rating rating={this.props.rating} />
        </div>
      </div>
    </div>
  );
}

