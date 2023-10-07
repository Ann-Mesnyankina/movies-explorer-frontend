import { useState } from "react"

export default function SearchForm() {
    const [toggeled, setToggeled] = useState(false)

    return (
        <form className="search-form" name="search-form" >
            <div className="search-form__container" htmlFor="switch-checked" >
                <input className="search-form__input" placeholder="Фильм" type="text" name="film" id="film" required />
                <button className="search-form__button" type="submit" ></button>
            </div>
            <div className="search-form__switch">
                <label className="search-form__switch-checkbox">
                    <input className="search-form__switch-input" checked={toggeled} type="checkbox" id="checkbox" onChange={() => setToggeled(!toggeled)} />
                    <span className="search-form__switch-circle"></span>
                </label>
                <label className="search-form__switch-shot-films" htmlFor="checkbox">Короткометражки</label>
            </div>
        </form>
    )
}