import './NavBar.css';
import { Link } from 'react-router-dom';
import DropDown from '../../../ui/dropdown/DropDown';

import React, { Component } from 'react';


class NavBar extends Component {

    state = {
        show: false
      };
    
      toggleShow = () => {
        this.setState(prevState => ({
          show: !prevState.show
        }));
      };
    
      handleClick = () => {
        console.log("MenuItem click");
        this.toggleShow();
      };

    render() {
        return (
            <nav id='nav'>
                <div className='NavMenu'>

                    <Link to="/" className='NavMenuLogo'>
                        <img src='/logo.svg' alt="logo" className='Logo'/>
                        <span>Unique</span>
                    </Link>

                    <ul className='NavMenuText'>
                        <li>
                            <Link to="/courses">
                                Курсы
                            </Link>
                        </li>
                        <li>
                            <Link to="/lections">
                                Лекции
                            </Link>
                        </li>
                        <li>
                            <Link to="/teachers">
                                Преподаватели
                            </Link>
                        </li>
                        <li>
                            <Link to="/educationmaterials">
                                Учебные материалы
                            </Link>
                        </li>
                        <li>
                            <Link to="/messages">
                                Сообщения
                            </Link>
                        </li>
                    </ul>
                
                    <div className='ContainerAvatar' onClick={this.toggleShow}>
                        {this.state.show && (
                            <DropDown onClick={this.handleClick}/>
                        )}
                        <img src='/Avatar.svg' alt="avatar" className='Avatar'/>
                        <a href="#">Красношлык С.А.</a>
                    </div>
                    
                </div>
            </nav>
        );
    }
}

export default NavBar;
