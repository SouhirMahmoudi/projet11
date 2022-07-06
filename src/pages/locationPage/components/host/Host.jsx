import './host.scss'

export default function Host(props) {

    return (
        <div className="host">
            <img src={props.img} alt="host" />
            <p>{props.name}</p>
        </div>
    )

}