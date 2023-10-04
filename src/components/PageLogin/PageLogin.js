import React from 'react';
import { Link } from 'react-router-dom'

export default function PageLogin({ name, buttonText, children, onSubmit, title, htmlFor }) {
    return (

        <div className="login login__auth-page" >
            <Link to="/"> <div className="header__logo" /></Link>
            <h2 className="login__title">{title}</h2>
            <form className="login__form" name={name} onSubmit={onSubmit} htmlFor={htmlFor} >
                {children}
                <Link to={'/movies'}><button className="login__submit-button" type="submit">{buttonText}</button></Link>
            </form>
            {
                name === 'signup' ? (<p className="login__link">Уже зарегестрированы?<Link to={'/signin'} className="login__link login__link-subtitle">Войти</Link></p>)
                    : (<p className="login__link">Еще не зарегестрированы?<Link to={'/signup'} className="login__link login__link-subtitle">Регистрация</Link></p>)
            }
        </div>

    )
}