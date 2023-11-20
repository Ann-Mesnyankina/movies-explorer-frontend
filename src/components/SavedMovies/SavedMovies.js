import { useCallback, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";

export default function SavedMovies({ savedMovies, onDeleteMovie, setError }) {
    const [searchInput, setSearchInput] = useState('')
    const [isCheckShotMovie, setCheckShotMovie] = useState(false)
    const [isFiltredMovie, setFiltredMovie] = useState(savedMovies)    

    const filtered = useCallback((isCheckShotMovie, movies, searchInput) => {
        setFiltredMovie(movies.filter((item) => {
            const findByName = item.nameRU.toLowerCase().includes(searchInput.toLowerCase()) ||
                item.nameEN.toLowerCase().includes(searchInput.toLowerCase())
            return isCheckShotMovie ? (findByName && item.duration <= 40) : findByName
        }))
        setSearchInput(searchInput)
    }, []);

    useEffect(() => {
        filtered(isCheckShotMovie, savedMovies, searchInput)
    },[filtered,isCheckShotMovie, savedMovies, searchInput])

    function findMovies(searchInput) {       
            filtered(isCheckShotMovie, savedMovies, searchInput)
    }

    function setCheckboxShortMovies() {
        if (isCheckShotMovie) {
            filtered(false, savedMovies, searchInput)
            setCheckShotMovie(false)
        } else {
            filtered(true, savedMovies, searchInput)
            setCheckShotMovie(true)
        }
    }

    return (
        <>
            <Header />
            <main className="content">
                <section className="movies">
                    <SearchForm
                        setError={setError}
                        findMovies={findMovies}
                        isCheckShotMovie={isCheckShotMovie}
                        setCheckboxShortMovies={setCheckboxShortMovies} />
                    <MoviesCardList
                        movies={isFiltredMovie}
                        savedMovies={savedMovies}
                        onDeleteMovie={onDeleteMovie}
                    />
                </section>
            </main>
            <Footer/>
        </>
    );
};