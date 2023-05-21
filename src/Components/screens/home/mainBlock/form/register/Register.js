import React from 'react'
import Submit from '../../../../../ui/btns/Submit'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <div className='LoginInputs'>
            <input placeholder='Логин'/>
            <input placeholder='Почта'/>
            <input placeholder='Пароль'/>
            <input placeholder='Повторите пароль'/>
        </div>

        <div className='LoginBtnForgotPassword'>
            <Link to={'/autorized'}><Submit>Зарегистрироваться</Submit></Link>
        </div>
    </div>
  )
}

export default Register