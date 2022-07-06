import { useState } from 'react'
import './src/components/pictureShow/pictureShow.scss'

export default function PictureShow(props) {

    let [currentSlide, setCurrentSlide] = useState(0)

    const prevPicture = () => {
        setCurrentSlide(currentSlide = currentSlide - 1)
        console.log(currentSlide);
        
        if (currentSlide < 0) {
            setCurrentSlide(props.img.length - 1)
            return
        }
    }

    const nextPicture = () => {
        console.log(currentSlide, props.img.length);
        setCurrentSlide(currentSlide = currentSlide + 1)
        if (currentSlide + 1 > props.img.length) {
            setCurrentSlide(0)
        }
    }

    return (
        <div className="pictureShow">
            <img className="picture" src={props.img && props.img[currentSlide]} alt="" />
            <div className="pictureShow-options">
                <p className="pictureShow-state">{(currentSlide) ? currentSlide + 1 : 1}/{props.img && props.img.length}</p>
                <button className={`pictureshow-prev ${(props.img && props.img.length === 1) ? "buttondisable" : ""}`} onClick={prevPicture}><img src="../../" /></button>
                <button className={`pictureshow-next ${(props.img && props.img.length === 1) ? "buttondisable" : ""}`} onClick={nextPicture}><img src="../../next.png" /></button>
            </div>
        </div>
    )

}