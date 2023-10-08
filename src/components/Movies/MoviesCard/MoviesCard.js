import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCard({ movie }) {
    const { pathname } = useLocation();
    const [isLiked, setIsLiked] = useState(false);

    const {
        image, nameRU, duration, movieId,
    } = movie;

    const cardLikeButtonClassName = `movies-сard__like-button ${isLiked ? 'movies-сard__like-button_active' : null}`;

    return (
        <>
            <li className="movies-сard__item" id={movieId} >
                <img src={image} alt={`шаблон картинки ${nameRU}`} className="movies-сard__image" />
                <div className="movies-сard__container-description">
                    <h2 className="movies-сard__title">{nameRU}</h2>
                    <p className="movies-сard__duration">{duration}</p>
                </div>
                {pathname === '/movies' ? (<button className={cardLikeButtonClassName} type="button" onClick={() => setIsLiked(!isLiked)} />)
                    : (<button className='movies-сard__remove-button' />)}
            </li>
        </>
    )
}