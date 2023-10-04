import React from 'react';
import PageLogin from '../PageLogin/PageLogin';
import Input from '../Input/Input';

export default function Register() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('')
    const [error, setError] = React.useState({});

    function handleSubmit(evt) {
        evt.preventDefault();
        //onRegister({ name: name, email: email, password: password })
    }

    function handleChangeName(evt) {
        setName(evt.target.value)
        setError({ name: evt.target.validationMessage });
    }

    function handleChangeEmail(evt) {
        setEmail(evt.target.value)
        setError({ email: evt.target.validationMessage });
    }

    function handleChangePassword(evt) {
        setPassword(evt.target.value)
        setError({ password: evt.target.validationMessage });
    }

    return (
        <main className="content">
            <PageLogin
                name='signup'
                title='Добро пожаловать!'
                buttonText='Зарегистрироваться'
                onSubmit={handleSubmit}
            >
                <Input
                    label='Имя'
                    type='name'
                    name='name'
                    id='name'
                    placeholder='Имя'
                    minLength={2}
                    maxLength={40}
                    value={name}
                    onChange={handleChangeName}
                    autoComplete="off"
                    required
                />
                <span className="login__error" id="name-error">{error.name}</span>
                <Input
                    label='E-mail'
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    minLength={2}
                    maxLength={40}
                    value={email}
                    onChange={handleChangeEmail}
                    autoComplete="off"
                    required
                />
                <span className="login__error" id="email-error">{error.email}</span>
                <Input
                    label='Пароль'
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Пароль'
                    minLength={2}
                    maxLength={200}
                    value={password}
                    onChange={handleChangePassword}
                    autoComplete="off"
                    required
                />
                <span className="login__error" id="password-error">{error.password}</span>
            </PageLogin>
        </main>
    )
}