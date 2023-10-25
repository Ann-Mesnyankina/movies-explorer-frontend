import { useContext, useEffect } from "react"
import { useFormWithValidation } from "../../../utils/hooks/formValid";
import { ErrorContext } from "../../../contexts/ErrorContext";
import { useLocation } from "react-router-dom";

export default function SearchForm({ findMovies, setError, setCheckboxShortMovies, isCheckShotMovie, searchInput }) {
    const { values, handleChange, resetForm } = useFormWithValidation();
    const isError = useContext(ErrorContext)
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/movies') {
            resetForm({ film: searchInput })
        } else {
            resetForm({ film: '' })
        }
    }, [resetForm, searchInput, pathname]);

    function handleSubmit(evt) {
        evt.preventDefault();
        if (evt.target.film.value) {
            findMovies(evt.target.film.value)
        } else {
            setError(true)
        }
    }

    return (
        <form className="search-form" name="search-form" onSubmit={handleSubmit} noValidate>
            <div className="search-form__container">
                <input className="search-form__input" placeholder="Фильм" type="text" name="film" id="film" value={values.film || ''} onChange={(evt) => {
                    handleChange(evt)
                    setError(false)
                }} required />
                <button className="search-form__button" type="submit" ></button>
            </div>
            <span className={`search-form__error ${isError && "search-form__error_active"}`} id="search-form-error">{'Нужно ввести ключевое слово'}</span>
            <div className="search-form__switch">
                <label className="search-form__switch-checkbox">
                    <input className="search-form__switch-input" type="checkbox" id="checkbox" checked={isCheckShotMovie} onChange={() => {
                        setCheckboxShortMovies()
                    }
                    } />
                    <span className="search-form__switch-circle"></span>
                </label>
                <label className="search-form__switch-shot-films" htmlFor="checkbox">Короткометражки</label>
            </div>
        </form>
    )
}