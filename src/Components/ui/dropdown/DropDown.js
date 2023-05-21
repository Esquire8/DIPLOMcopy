import React from 'react'
import './DropDown.css'
import { Link } from 'react-router-dom'

const DropDown = () => {
  return (
    <div className='DropDown'>
        <div className='DropDownInside'>
            <Link to='/profile'>Профиль</Link>
            <Link to='/basket'>Корзина</Link>
            <Link to='/favourites'>Избранное</Link>
            <Link to='/exit'>Выйти</Link>
        </div>
    </div>
  )
}

export default DropDown