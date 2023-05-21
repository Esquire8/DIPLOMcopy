import React from 'react';
import './Directions.css'
import Direction from '../../../ui/cards/directon/Direction';
import { directions } from './Directions.data';

const Directions = () => (
    <section>
        <h1>Направления</h1>
        <div className='DirectionsContainer'>
            {directions.length ? directions.map(direction =>
                <Direction key={direction.id} direction={direction}/>
            )
            : <p>Курсов нет</p>
            }
        </div>
        
    </section>
);

export default Directions