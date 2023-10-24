import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import Preloader from '../Preloader/Preloader';
import { useCallback, useEffect, useState } from "react";
import {
    MAXWIDTH_1280,
    MAXWIDTH_768,
    DOWNLOAD_1280,
    DOWNLOAD_768,
    DOWNLOAD_320,
    ADDMORE_1280,
    ADDMORE_768,
    ADDMORE_320
} from "../../../utils/constans";

export default function MoviesCardList({ movies, onDeleteMovie, savedMovies, isErrorServer, isPreloader, onLikeMovie, isNotFoundMovie }) {
    const { pathname } = useLocation();
    const [countMovie, setCountMovie] = useState('')

    const moviesResize = useCallback(() => {
        if (window.innerWidth < MAXWIDTH_1280 || window.innerWidth >= MAXWIDTH_1280 || window.innerWidth < MAXWIDTH_768) {
            setCountMovie(addMoviesByButton().edit);
        }
    }, [])

    useEffect(() => {
        if (pathname === '/movies') {
            setCountMovie(addMoviesByButton().edit)
            window.addEventListener('resize', moviesResize);
            return()=> window.removeEventListener('resize', moviesResize);
        }

    }, [pathname, moviesResize]);

    function addMoviesByButton() {
        const width = window.innerWidth;
        const addition = { edit: DOWNLOAD_1280, step: ADDMORE_1280 }
        if (width < MAXWIDTH_1280) {
            addition.edit = DOWNLOAD_768;
            addition.step = ADDMORE_768;

        } if (width < MAXWIDTH_768) {
            addition.edit = DOWNLOAD_320;
            addition.step = ADDMORE_320;
        }
        return addition
    }    

    function clickButtonMore() {
        setCountMovie(countMovie + addMoviesByButton().step);
    };

    return (
        <div className={`movies-сard ${pathname === '/saved-movies' ? 'movies-сard_has-tail' : ''}`}>
            {isErrorServer ? (<span className="movies-card__text movies-card__text-error">{isErrorServer}</span>)
                : (<ul className="movies-сard__list">
                    {isPreloader ? <Preloader />
                        : (pathname === '/movies') ?
                            (movies.slice(0, countMovie).length > 0 ?
                                movies.slice(0, countMovie).map(movie => (
                                    <MoviesCard
                                        key={movie.id}
                                        movie={movie}
                                        savedMovies={savedMovies}
                                        onLikeMovie={onLikeMovie}
                                    />
                                )) : (<span className={`movies-card__text ${!isNotFoundMovie && "movies-card__text-error"}`}>{'Ничего не найдено'}</span>))
                            : (movies.length > 0 &&
                                movies.map(movie => (
                                    <MoviesCard
                                        key={movie._id}
                                        movie={movie}
                                        savedMovies={savedMovies}
                                        onDeleteMovie={onDeleteMovie}
                                    />
                                )))}
                </ul>)
            }
            {pathname === '/movies' && countMovie < movies.length ? (<button className="movies-сard__button-more" type="button" onClick={clickButtonMore}>Ещё</button>
            ) : ''}
        </div>
    );
}