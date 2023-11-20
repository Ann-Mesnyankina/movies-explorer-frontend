import React, { useCallback, useEffect, useState } from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import moviesApi from '../../utils/MoviesApi';

export default function Movies({ savedMovies, setError, setErrorServer, isErrorServer, onLikeMovie }) {
    const [movies, setMovies] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [isCheckShotMovie, setCheckShotMovie] = useState(false)
    const [isFiltredMovie, setFiltredMovie] = useState([])
    const [isPreloader, setPreloader] = useState(false)
    const [isNotFoundMovie, setNotFoundMovie] = useState(true)

    const filtered = useCallback((isCheckShotMovie, movies, searchInput) => {
        localStorage.setItem('allMovies', JSON.stringify(movies));
        localStorage.setItem('shortCheck', JSON.stringify(isCheckShotMovie));
        localStorage.setItem('keyword', JSON.stringify(searchInput));
        setFiltredMovie(movies.filter((item) => {
            const findByName = item.nameRU.toLowerCase().includes(searchInput.toLowerCase()) ||
                item.nameEN.toLowerCase().includes(searchInput.toLowerCase())
            return isCheckShotMovie ? (findByName && item.duration <= 40) : findByName
        }))
        setSearchInput(searchInput)
    }, []);

    useEffect(() => {
        if (localStorage.shortCheck && localStorage.allMovies && localStorage.keyword) {
            const checkShortMovie = JSON.parse(localStorage.getItem('shortCheck'));
            const allMovies = JSON.parse(localStorage.getItem('allMovies'));
            const search = JSON.parse(localStorage.getItem('keyword'));
            setMovies(allMovies)
            setCheckShotMovie(checkShortMovie)
            setSearchInput(search)
            filtered(checkShortMovie, allMovies, search)
        }
    }, [setSearchInput, filtered])

    function findMovies(searchInput) {
        if (!localStorage.allMovies) {
            setPreloader(true)
            moviesApi.getInitialMovies()
                .then((data) => {
                    setMovies(data)
                    setErrorServer('')
                    setNotFoundMovie(false)
                    filtered(isCheckShotMovie, data, searchInput)
                })
                .catch((error) => {
                    setErrorServer('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.Подождите немного и попробуйте ещё раз')
                    console.error(`Не получилоcь найти фильмы ${error}`)
                })
                .finally(() => {
                    setPreloader(false)
                })
            } else {
            filtered(isCheckShotMovie, movies, searchInput)
        }
    }

    function setCheckboxShortMovies() {
        if (isCheckShotMovie) {
            filtered(false, movies, searchInput)
            setCheckShotMovie(false)
        } else {
            filtered(true, movies, searchInput)
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
                        setCheckboxShortMovies={setCheckboxShortMovies}
                        searchInput={searchInput}
                    />
                    <MoviesCardList
                        movies={isFiltredMovie}
                        savedMovies={savedMovies}
                        isPreloader={isPreloader}
                        isErrorServer={isErrorServer}
                        onLikeMovie={onLikeMovie}
                        isNotFoundMovie={isNotFoundMovie}
                    />
                </section>
            </main>
            <Footer />
        </>
    );
};
