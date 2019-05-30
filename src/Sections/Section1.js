import React from 'react';

import ButtonLink from '../Elements/ButtonLink';
import Line from '../Elements/Line';

const Section1 = () => (
    <div className='Section1'>
        <div className='Section1__Logo'>
            <img src={require('../assets/house.png')} alt='' />
            <div>
                <p className="Section1__Logo-1">Eco house</p>
                <p className="Section1__Logo-2">Строительство Эко-Домов</p>
            </div>
        </div>

        <div className="Section1__Phone">
            <p className="Section1__Phone-number">+7 (888) 888 88 88</p>
            <a href='localhost' className="Section1__Phone-1">заказать обратный звонок</a>
            <p className="Section1__Phone-2">Работаем с 7:00 до 20:00 ежедневно</p>
        </div>

        <Line />

        <div className="Section1__Title">
            <h1>строим уютные эко-дома<br />по европейской<br />технологии</h1>
            <div>
                <img src={require('../assets/forest.png')} alt=""/>
                <p>сибирская древесина со 100 летней гарантией</p>
            </div>
            <div>
                <img src={require('../assets/builder.png')} alt=""/>
                <p>команда опытных специалистов</p>
            </div>
            <div>
                <img src={require('../assets/stopwatch.png')} alt=""/>
                <p>строим в течении 2 месяцев</p>
            </div>
            <img className='Section1__Title-stamp' src={require('../assets/stamp-award.png')} alt=''/>
        </div>

        <ButtonLink
            text='Посмотреть наши проекты'
            pic='play' />
    </div>
)

export default Section1;