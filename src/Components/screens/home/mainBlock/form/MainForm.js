import React, { useState } from 'react';
import './MainForm.css'
import Login from './login/Login';
import Register from './register/Register';


const MainForm = () => {

    const [count, setCount] = useState(<Login/>);
    const [isLoginClicked, setisLoginClicked] = useState(true)
    const [isRegClicked, setisRegClicked] = useState(false)


    const handleClick = (e) =>{
        if (e.target.className.includes('BtnLogin')){
            if (isLoginClicked === true){
                setCount(<Login/>)
            } else if (isLoginClicked === false){
                setisLoginClicked(!isLoginClicked)
                setisRegClicked(!isRegClicked)
                setCount(<Login/>)
            }
        } else if (e.target.className.includes('BtnReg')){
            if (isRegClicked === false){
                setCount(<Register/>)
                setisRegClicked(!isRegClicked)
                setisLoginClicked(!isLoginClicked)
            } else if (isRegClicked === true){
                setCount(<Register/>)
            }
        }
    };

    const handleLoginClickClass = () => {
        if (isLoginClicked === true){
            return 'Active'
        } else if (isLoginClicked === false){
            return 'Unactive'
        }
    };

    const handleRegClickClass = () => {
        if (isRegClicked === false){
            return 'Unactive'
        } else if (isRegClicked === true){
            return 'Active'
        }
    };

    return(
        <div className='FormContainer'>

            <div className='FormButtons'>
                <button className={`BtnLogin ${handleLoginClickClass()}`} onClick={handleClick}>Войти</button>
                <button className={`BtnReg ${handleRegClickClass()}`} onClick={handleClick}>Регистрация</button>
            </div>

            <div>{count}</div>

        </div>
    )
};

    
export default MainForm