import './stars.scss'

export default function Stars(props) {

    return (
        <div className="stars">
            {Array.from({length: parseInt(props.rating)}, (v, ids) => <img key={'v-' + ids} src="./components/pages/locationPage/components/stars/VectorStar.svg" alt="star svg" />)}
            {Array.from({length: 5 - parseInt(props.rating)}, (v, ids) => <img key={'e-' + ids} src="./components/pages/locationPage/components/stars/VectorStarEmply.svg" alt="star svg" />)}
        </div>
    )

}