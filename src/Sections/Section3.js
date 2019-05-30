import React from 'react';
import IronImage from 'react-image-lazy-load-component';

import Line from '../Elements/Line';

const Section3 = () => (
    <div className="Section3">
        <Line />
        <h2 className='Section3__Title'>Технология строительства</h2>
        <div className="Section3__Content">
            <div className='Section3__Content-woods'>
                <IronImage src={require('../assets/woods.jpg')} alt=''/>

                <div className="Section3__Content-text">
                    <p>европейская сосна</p>
                    <span>Собирается в экологических<br />лесах Европы</span>
                </div>

                <div className="Section3__Content-text">
                    <p>влагостойкость</p>
                    <span>Выдерживает любые погодные<br />условия</span>
                </div>

                <div className="Section3__Content-text">
                    <p>надежность</p>
                    <span>Срок службы более<br />100 лет</span>
                </div>
            </div>
        </div>
    </div>
)

export default Section3;