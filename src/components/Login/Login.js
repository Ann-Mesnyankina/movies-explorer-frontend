import React from 'react';
import PageLogin from '../PageLogin/PageLogin';
import Input from '../Input/Input';
import {
    EMAIL_REGEX
} from "../../utils/constans";

export default function Login({ onLogin ,setError}) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState({});
    const [isValid, setIsValid] = React.useState(false)

    function handleSubmit(evt) {
        evt.preventDefault();
        onLogin({ email: email, password: password })
    }

    function handleChangeEmail(evt) {
        setEmail(evt.target.value)
        setErrorMessage({ email: evt.target.validationMessage });
        setIsValid(evt.target.closest("form").checkValidity());
    }

    function handleChangePassword(evt) {
        setPassword(evt.target.value)
        setErrorMessage({ password: evt.target.validationMessage });
        setIsValid(evt.target.closest("form").checkValidity());
    }

    return (
        <main className="content">
            <PageLogin
                name='login'
                title='Рады видеть!'
                buttonText='Войти'
                onSubmit={handleSubmit}
                isValid={isValid}
                showError={setError}
            >
                <Input
                    label='E-mail'
                    type='email'
                    name='email'
                    id='email'
                    placeholder='E-mail'
                    minLength={2}
                    maxLength={40}
                    value={email || ''}
                    onChange={handleChangeEmail}
                    pattern={EMAIL_REGEX}
                    required
                />
                <span className="login__error" id="email-error">{errorMessage.email}</span>
                <Input
                    label='Пароль'
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Пароль'
                    minLength={2}
                    maxLength={200}
                    value={password || ''}
                    onChange={handleChangePassword}
                    required
                />
                <span className="login__error" id="password-error">{errorMessage.password}</span>
            </PageLogin>
        </main>
    )
}