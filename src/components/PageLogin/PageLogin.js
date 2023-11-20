import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { ErrorContext } from '../../contexts/ErrorContext';

export default function PageLogin({ name, buttonText, children, onSubmit, title, htmlFor, isValid, showError }) {
    const { pathname } = useLocation();
    const isError = useContext(ErrorContext)

    useEffect(() => {
        showError(false)
    }, [showError]);   

    return (
        <section className="login" >
            <div className="login__container">
                <Link to="/" className="login__link-main" ><div className="login__logo" /></Link>
                <h1 className="login__title">{title}</h1>
                <form className="login__form" name={name} onSubmit={onSubmit} htmlFor={htmlFor} noValidate>
                    {children}
                    {pathname === '/signin' ? (
                        <>
                          <span className={`login__error-submit login__error-submit-signin ${isError && "login__error-submit_active"}`} id="submit-error">{'Не получилось войти'}</span>
                            <button className= "login__submit-button" type="submit" disabled={!isValid}>{buttonText}</button>
                        </>
                    ) : (
                        <>
                         <span className={`login__error-submit ${isError && "login__error-submit_active"}`} id="submit-error">{'Не получилось зарегестрироваться'}</span>
                            <button className="login__submit-button" type="submit" disabled={!isValid}>{buttonText}</button>
                        </>)
                    }
                </form>
                {
                    name === 'signup' ? (<p className="login__text">Уже зарегестрированы?<Link to={'/signin'} className="login__link-subtitle">Войти</Link></p>)
                        : (<p className="login__text">Еще не зарегестрированы?<Link to={'/signup'} className="login__link-subtitle">Регистрация</Link></p>)
                }
            </div>
        </section>

    )
}