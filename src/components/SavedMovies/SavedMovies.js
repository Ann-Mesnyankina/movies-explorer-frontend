import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";

export default function SavedMovies({ movie, onDeleteMovie }) {

    return (
        <>
            <Header />
            <main className="content">
                <section className="movies">
                    <SearchForm />
                    <MoviesCardList
                        movie={movie}
                        onDeleteMovie={onDeleteMovie} />
                </section>
            </main>
            <Footer />
        </>
    );
};