import React from 'react';
import PageLogin from '../PageLogin/PageLogin';
import Input from '../Input/Input';


export default function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState({});

    function handleSubmit(evt) {
        evt.preventDefault();
        // onLoggedIn({ email: email, password: password })
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
                name='login'
                title='Рады видеть!'
                buttonText='Войти'
                onSubmit={handleSubmit}
            >
                <Input
                    label='E-mail'
                    type='email'
                    name='email'
                    id='email'
                    placeholder='E-mail'
                    minLength={2}
                    maxLength={40}
                    value={email}
                    onChange={handleChangeEmail}
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
                    required
                />
                <span className="login__error" id="password-error">{error.password}</span>
            </PageLogin>
        </main>
    )
}