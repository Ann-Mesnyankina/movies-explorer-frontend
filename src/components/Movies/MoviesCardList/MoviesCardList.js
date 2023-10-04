import MoviesCard from "../MoviesCard/MoviesCard";
import { initialMovies } from "../../../utils/constans";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({ onLikeMovie, onDeleteMovie, }) {
    const { pathname } = useLocation();

    return (
        <div className="movies-сard">
            <ul className="movies-сard__list">
                {initialMovies.map(movie => (
                    <MoviesCard
                        key={movie.movieId}
                        movie={movie}
                        onLikeMovie={onLikeMovie}
                        onDeleteMovie={onDeleteMovie} />
                ))}
            </ul>
            {pathname === '/movies' && <button className="movies-сard__button-more" type="button">Ещё</button>}
        </div>
    );
}