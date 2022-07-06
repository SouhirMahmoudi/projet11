import { useEffect, useState } from "react";
import {  Navigate, useParams } from 'react-router-dom'
import LocalFetch from "../../utils/LocalFetch";
import Host from "./components/host/Host";
import Dropdown from "./components/dropdown/Dropdown";
import PictureShow from "./components/pictureShow/PictureShow";
import Stars from "./components/stars/Stars";
import Tags from "./components/Tags/Tags";
import './locationPage.scss'

export default function LocationPage() {

    const [location, setLocation] = useState({})

    const { id } = useParams()

    useEffect(() => {

        (async function fetchData() {
            const data = await LocalFetch.get("../logements.json")
            const article = data.filter((logement) => logement.id === id)[0]

            setLocation(article)
        })()

    }, [id])

    if (!location) {
        return<Navigate to="/" replace />

    }


    console.log("title", location.title);

    return (
        <div className="LocationPage">
            <div className="LocationPage-main">
                <PictureShow img={location.pictures} />
                <div className="LocationPage-header">
                    <div className="LocationPage-info">
                        <h1 className="LocationPage-title">{location.title && location.title}</h1>
                        <p className="LocationPage-location">{location.location && location.location}</p>
                        <Tags tags={location.tags && location.tags} />
                    </div>
                    <div className="LocationPage-host">
                    <Host img={location.host && location.host.picture} name={location.host && location.host.name} />
                        <Stars star={location.rating && location.rating} />
                    </div>
                </div>
                <div className="LocationPage-dropdown">
                    <Dropdown name="Description" data={location.description && location.description} />
                    <Dropdown name="Équipements" data={location.equipments && location.equipments} />
                </div>
            </div>
        </div>
    )

}