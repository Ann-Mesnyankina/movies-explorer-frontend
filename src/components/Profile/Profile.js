import React from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";


export default function Profile() {
    const navigate = useNavigate();
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [isEditInfo, setEditInfo] = React.useState(false)
    const [isDisabledButton, setDisabledButton] = React.useState(false)


    function handleChangeName(evt) {
        setName(evt.target.value)
    }

    function handleChangeEmail(evt) {
        setEmail(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        setDisabledButton(!isDisabledButton)
    }

    function handleLogOut() {
        navigate('/');
    };

    return (
        <>
            <Header />
            <main className="content">
                <section className="profile">
                    <h3 className="profile__title">{`Привет, ${name}!`}</h3>
                    <form className="profile__form" id="profile" onSubmit={handleSubmit} noValidate>
                        <div className="profile__container">
                            <label className="profile__input-label">Имя</label>
                            <input className="profile__input"
                                id="name"
                                type="name"
                                minLength={2}
                                maxLength={35}
                                placeholder="Имя"
                                value={name}
                                onChange={handleChangeName}
                                required
                            />
                        </div>
                        <div className="profile__container">
                            <label className="profile__input-label">E-mail</label>
                            <input className="profile__input"
                                id="email"
                                type="email"
                                placeholder="E-mail"
                                minLength={2}
                                maxLength={40}
                                value={email}
                                onChange={handleChangeEmail}
                                required
                            />
                        </div>
                        {!isEditInfo ? (
                            <>
                                <button className="profile__link" type="submit" form="profile" onClick={() => setEditInfo(!isEditInfo)}>Редактировать</button>
                                <button className="profile__link profile__link-logout" onClick={handleLogOut}>Выйти из аккаунта</button>
                            </>
                        ) : (
                            <>
                                <span className="profile__error">{isDisabledButton ? 'При обновлении профиля произошла ошибка.' : ''}</span>
                                <button className="profile__button-save" disabled={isDisabledButton} onClick={handleSubmit}>Сохранить</button>
                            </>)
                        }
                    </form>
                </section >
            </main>
        </>
    );
}
