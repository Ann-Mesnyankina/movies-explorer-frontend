import { NavLink } from "react-router-dom"

export default function AuthMenu() {
    return (
        <nav className="auth-menu">
            <ul className="auth-menu__list">
                <li><NavLink to="/signup" className="auth-menu__link auth-menu__link_type_signup">Регистрация</NavLink></li>
                <li><NavLink to="/signin" className="auth-menu__link auth-menu__link_type_signin">Войти</NavLink></li>
            </ul>
        </nav>
    );
};
