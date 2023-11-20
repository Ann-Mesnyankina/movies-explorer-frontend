import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function MoviesCard({ movie, savedMovies, onDeleteMovie, onLikeMovie }) {
    const { pathname } = useLocation();
    const [isLiked, setIsLiked] = useState(false);
    const imageUrl = `https://api.nomoreparties.co${movie.image.url}`

    const cardLikeButtonClassName = `movies-сard__like-button ${isLiked ? 'movies-сard__like-button_active' : null}`;
    const duration = countDuration(movie.duration)

    useEffect(() => {
        if (pathname === '/movies') {
            setIsLiked(savedMovies.some((data) => data.movieId === movie.id))
        }
    }, [savedMovies, pathname, movie.id])

    function handleLike() {
        if (!isLiked && savedMovies.some((data) => data.movieId === movie.id)) {
            setIsLiked(true)
            onLikeMovie(movie)
        } else {
            setIsLiked(false)
            onLikeMovie(movie)
        }
    }

    function countDuration(duration) {
        const hours = Math.floor(duration / 60);
        const min = duration % 60;
        return hours > 0 ? `${hours}ч ${min}м` : `${min}м`;
    }

    return (
        <>
            <li className="movies-сard__item" id={movie.movieId} >
                <NavLink to={movie.trailerLink} target="_blank" rel="noreferrer">
                    <img src={pathname === '/movies' ? imageUrl : movie.image}
                        alt={`шаблон картинки ${movie.nameRU}`}
                        className="movies-сard__image" /></NavLink>
                <div className="movies-сard__container-description">
                    <h2 className="movies-сard__title">{movie.nameRU}</h2>
                    <p className="movies-сard__duration">{duration}</p>
                </div>
                {pathname === '/movies' ? (<button className={cardLikeButtonClassName} type="button" onClick={handleLike} />)
                    : (<button className='movies-сard__remove-button' onClick={() => { onDeleteMovie(movie._id) }} />)}
            </li>
        </>
    )
}