import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/hooks/formValid";
import {
    EMAIL_REGEX
} from "../../utils/constans";

export default function Profile({ onSubmitProfile, setLoggedIn, isAchieve, setAchieve, setErrorServer, isErrorServer }) {
    const navigate = useNavigate();
    const [isEditProfile, setIsEditProfile] = React.useState(false);
    const currentUser = useContext(CurrentUserContext);
    const { values, handleChange, isValid, resetForm } = useFormWithValidation();
    const isCheckCurrentData = values.name !== currentUser.name || values.email !== currentUser.email

    useEffect(() => {
        resetForm({ name: currentUser.name, email: currentUser.email })
    }, [resetForm, currentUser]);

    useEffect(() => {
        setAchieve('')
        setErrorServer('')
    }, [setAchieve, setErrorServer])

    function handleSubmit(evt) {
        evt.preventDefault();
        if (values.name !== currentUser.name || values.email !== currentUser.email) {
            onSubmitProfile({ name: values.name, email: values.email })
        }
    }

    function handleLogOut() {
        setLoggedIn(false)
        localStorage.clear()
        navigate('/');
    };

    return (
        <>
            <Header />
            <main className="content">
                <section className="profile">
                    <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
                    <form className="profile__form" id="profile" name="profile" onSubmit={handleSubmit} values={values} noValidate>
                        <div className="profile__container">
                            <label className="profile__input-label">Имя</label>
                            <input className="profile__input"
                                name="name"
                                id="name"
                                type="text"
                                minLength={2}
                                maxLength={35}
                                placeholder="Имя"
                                value={values.name || ''}
                                onChange={handleChange}
                                disabled={!isEditProfile}
                                required
                            />
                        </div>
                        <div className="profile__container">
                            <label className="profile__input-label">E-mail</label>
                            <input className="profile__input"
                                name="email"
                                id="email"
                                type="email"
                                placeholder="E-mail"
                                minLength={2}
                                maxLength={40}
                                value={values.email || ''}
                                onChange={handleChange}
                                pattern={EMAIL_REGEX}
                                disabled={!isEditProfile}
                                required
                            />
                        </div>

                        {
                            isAchieve ? (<span className="profile__text profile__text-success">{isAchieve}</span>)
                                : isErrorServer ? (<span className="profile__text profile__text-error">{isErrorServer}</span>)
                                    : (<span className="profile__text" ></span>)
                        }

                        {!isEditProfile || isAchieve ? (
                            <>
                                <button className="profile__link" form="profile" onClick={() => {
                                    setIsEditProfile(true)
                                    setAchieve('')
                                }}>Редактировать</button>
                                <button className="profile__link profile__link-logout" onClick={handleLogOut}>Выйти из аккаунта</button>
                            </>
                        ) : (
                            <>
                                <button className="profile__button-save" disabled={!isValid || isErrorServer||!isCheckCurrentData} form="profile" type="submit">Сохранить</button>
                            </>)
                        }
                    </form>
                </section >
            </main>
        </>
    );
}
