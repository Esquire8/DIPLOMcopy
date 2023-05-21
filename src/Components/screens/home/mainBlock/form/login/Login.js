import React from 'react'
import Submit from '../../../../../ui/btns/Submit'
import './Login.css'

const Login = () => {
  return (
    <div>
        <div className='LoginInputs'>
            <input placeholder='Логин или код'/>
            <input placeholder='Пароль'/>
        </div>
        <div className='LoginBtnForgotPassword'>
            <Submit>Войти</Submit>
            <a href='https://vk.com'>Забыли пароль?</a>
        </div>
    </div>
  )
}

export default Login