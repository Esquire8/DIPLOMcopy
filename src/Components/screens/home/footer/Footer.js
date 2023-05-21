import React from 'react';
import './Footer.css';
import Submit from '../../../ui/btns/Submit';

const Footer = () =>(
    <footer>
        <div className='HelpCourse'>

            <div className='HelpCourseText'>
                <p className='HelpHeading'>Поможем вам в выборе курса</p>
                <p className='HelpSubtitle'>Если вы до сих пор не определились с выбором курса, обратитесь к нам за помощью, заполнив форму.</p>
            </div>

            <form className='HelpCourseForm'>
                <input placeholder="Ваше имя" />
                <div className='HelpCoursePhoneEmail'>
                    <input placeholder="Телефон"/>
                    <input placeholder="Почта" />
                </div>
                <Submit>Отправить</Submit>
            </form>

        </div>

        <div className='FooterMain'>
            <div className='FooterMainBlock'>
                <p><b>Направления</b></p>
                <p>Программирование</p>
                <p>Дизайн</p>
                <p>Маркетинг</p>
                <p>Психология</p>
                <p>Игры</p>
                <p>Философия</p>
                <p>Финансы</p>
                <p>Физика</p>
                <p>Химия</p>
            </div>

            <div className='FooterMainBlock'>
                <p><b>Кураторы</b></p>
                <p>Андрей - Web Developer</p>
                <p>Мария - Frontend Developer</p>
                <p>Максим - Backend Developer </p>
                <p>Егор - Machine Learning Developer</p>
            </div>

            <div className='FooterMainBlock'>
                <p><b>Контакты</b></p>
                <p>+7 923 756 56-46</p>
                <p>improve_mind@gmail.com</p>
                <p>improve_mind@mail.ru </p>
                <p>improve_mind@yandex.ru </p>
            </div>

            <div className='FooterMainBlock'>
                <p><b>О нас</b></p>
                <p>Студенческий проект</p>
                <p>Красношлык С.А.</p>
                <p>Оганисян А.А.</p>
            </div>
        </div>
    </footer>
)

export default Footer;