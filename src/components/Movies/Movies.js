import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

export default function Movies({ movie, savedMovies, savedMoviesById, onDeleteMovie, onLikeMovie }) {

    return (
        <>
            <Header />
            <main className="content">
                <section className="movies">
                    <SearchForm />
                    <MoviesCardList
                        movie={movie}
                        savedMovies={savedMovies}
                        savedMoviesById={savedMoviesById}
                        onLikeMovie={onLikeMovie}
                        onDeleteMovie={onDeleteMovie} />
                </section>
            </main>
            <Footer />
        </>
    );
};

