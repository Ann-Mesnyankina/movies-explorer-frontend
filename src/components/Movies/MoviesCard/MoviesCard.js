import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCard({ movie }) {
    const { pathname } = useLocation();
    const [isLiked, setIsLiked] = useState(false);

    const {
        image, nameRU, duration, movieId,
    } = movie;

    const cardLikeButtonClassName = `element__like-button ${isLiked ? 'element__like-button_active' : null}`;

    return (
        <li className="element__item" id={movieId} >
            <img src={image} alt={`шаблон картинки ${nameRU}`} className="element__image" />
            <div className="element__container-description">
                <h3 className="element__title">{nameRU}</h3>
                <p className="element__duration">{duration}</p>
            </div>
            {pathname === '/movies' ? (<button className={cardLikeButtonClassName} type="button" onClick={() => setIsLiked(!isLiked)} />)
                : (<button className='element__remove-button' />)}
        </li>
    )
}