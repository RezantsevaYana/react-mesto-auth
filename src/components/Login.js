import React from "react";
import Header from "./Header";


function Login(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    // обработчик изменения инпутов
    function handleMailChange(evt) {
        setEmail(evt.target.value)
    }

    function handlePasswordChange(evt) {
        setPassword(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onlogin(email, password);
    }

    return(
    <>
    <div className='main-page'>
        <h2 className='main-page__title'>Вход</h2>
        <form className="main-page__form" onSubmit={handleSubmit}>
            <input className="main-page__input"
                value="" id="email-input"
                type="email"
                name='email'
                placeholder="Email"
                value = {email || ""}
                onChange={handleMailChange}>
            </input>
            <input className="main-page__input"
                    value="" id="password-input" 
                    type="password" 
                    name='password' 
                    placeholder="Пароль"
                    value = {password || ""}
                    onChange={handlePasswordChange}>
             </input>
            <button className="main-page__button" type="submit">Войти</button>
        </form>
    </div>
    </>

    )
}

export default Login;