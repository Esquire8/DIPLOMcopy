import React from 'react';
import './MainBlock.css';
import MainForm from './form/MainForm';

const MainBlock = () => {

    return(
        <div className='BlockNoPadding'>
            
            <div className='MainBlock'>
                <div className='MainBlockText'>
                    <p className='MainHeading'>Курсы от преподавателей ведущих вузов России</p>
                    <div className='Subtitle'>
                        <p>Улучшите свою успеваемость.</p>
                        <p>Более 300 курсов, найдется любой на ваш интерес.</p>
                        <p>Поможем, если возникли трудности в учебе.</p>
                    </div>
                </div>
                <MainForm/>
                
            </div>

            <img src='/mainBlockimg.png' alt='mainBlockImage' className='MainBlockImage'/>

        </div>
    )
};
    

export default MainBlock;