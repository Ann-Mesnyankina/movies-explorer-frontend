import { Link } from "react-router-dom"

export default function AuthMenu() {
    return (
        <div className="auth-menu">
            <ul className="auth-menu__list">
                <li><Link to="/signup" className="auth-menu__link auth-menu__link_type_signup">Регистрация</Link></li>
                <li><Link to="/signin" className="auth-menu__link auth-menu__link_type_signin">Войти</Link></li>
            </ul>
        </div>
    );
};
