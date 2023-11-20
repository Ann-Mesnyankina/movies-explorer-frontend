import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation__menu">
                <li><NavLink to="/movies" className="navigation__link"> Фильмы</NavLink></li>
                <li><NavLink to="/saved-movies" className="navigation__link navigation__link-saved">Сохранённые фильмы</NavLink></li>
            </ul>
            <NavLink to="/profile" className="navigation__link navigation__link-account"></NavLink>
        </nav>
    );
}

