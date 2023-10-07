
import { NavLink } from "react-router-dom";

export default function BurgerNav({ active, setBurgerActive }) {
   
    return (
        <section className={`burger-nav ${active ? 'burger-nav_active' : ''}`}>
            <nav className="burger-nav__content">            
                <button className="burger-nav__button-close" type="button" onClick={() => setBurgerActive(!active)}></button>
                <ul className="burger-nav__menu">
                    <li><NavLink to="/" className="burger-nav__link">Главная</NavLink></li>
                    <li><NavLink to="/movies" className="burger-nav__link burger-nav__link-films"> Фильмы</NavLink></li>
                    <li><NavLink to="/saved-movies" className="burger-nav__link">Сохранённые фильмы</NavLink></li>
                </ul>
                <NavLink to="/profile" className="burger-nav__link burger-nav__link-account"></NavLink>
            </nav>
            
        </section >
    )
}