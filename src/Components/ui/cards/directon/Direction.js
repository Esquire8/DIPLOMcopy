import React from 'react';
import './Direction.css'

const Direction = ({direction}) =>(
    <div className='CardDirection'>
        <a href={direction.link} className='Card'>

            <img src={direction.imgURL} alt='CardHeader'/>
            <div className='CardText'>
                <h3>{direction.text}</h3>
                <p>{direction.program} программ</p>
            </div>

        </a>
    </div>

);

export default Direction