import React from 'react';
import { Link, useLocation } from 'react-router-dom'

export default function PageLogin({ name, buttonText, children, onSubmit, title, htmlFor }) {
    const { pathname } = useLocation();



    return (
        <section className="login" >
            <div className="login__container">
            <Link to="/" className="login__link-main" ><div className="login__logo"/></Link>
                <h1 className="login__title">{title}</h1>
                <form className="login__form" name={name} onSubmit={onSubmit} htmlFor={htmlFor} >
                    {children}
                    <Link to={'/movies'}><button className={`login__submit-button ${pathname === '/signin' && 'login__submit-button-signin'}`} type="submit">{buttonText}</button></Link>
                </form>
                {
                    name === 'signup' ? (<p className="login__text">Уже зарегестрированы?<Link to={'/signin'} className="login__link-subtitle">Войти</Link></p>)
                        : (<p className="login__text">Еще не зарегестрированы?<Link to={'/signup'} className="login__link-subtitle">Регистрация</Link></p>)
                }
            </div>
        </section>

    )
}