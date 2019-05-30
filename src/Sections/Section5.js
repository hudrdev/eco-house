import React from 'react';

import Line from '../Elements/Line';

const Section5 = () => (
    <div className="Section5">
        <h2 className="Section5__Title">6 шагов к вашему новому дому</h2>
        <Line />
        <div className="Section5__Content">
            <div className="Section5__Content-item">
                <img src={require('../assets/section5-1.png')} alt="" />
                <p>заявка на сайте</p>
                <span>Вы оставляете заявку на<br />сайте или звоните нам<br />+7(939) 948-74-77.</span>
                <span>01</span>
            </div>

            <div className="Section5__Content-arrow">
                <img src={require('../assets/double-arrow.png')} alt=""/>
            </div>

            <div className="Section5__Content-item">
                <img src={require('../assets/section5-2.png')} alt="" />
                <p>звонок менеджера</p>
                <span>Мы связываемся с вами для<br />уточнения деталей и выбираем<br />время для встречи.</span>
                <span>02</span>
            </div>

            <div className="Section5__Content-arrow">
                <img src={require('../assets/double-arrow.png')} alt=""/>
            </div>

            <div className="Section5__Content-item">
                <img src={require('../assets/section5-3.png')} alt="" />
                <p>встреча</p>
                <span>В нашем офисе или<br />у нас на участке.</span>
                <span>03</span>
            </div>

            <div className="Section5__Content-arrow">
                <img src={require('../assets/double-arrow.png')} alt=""/>
            </div>

            <div className="Section5__Content-item">
                <img src={require('../assets/section5-4.png')} alt="" />
                <p>договор</p>
                <span>Заключаем договор с чётко<br />указанными сроками.</span>
                <span>04</span>
            </div>

            <div className="Section5__Content-arrow">
                <img src={require('../assets/double-arrow.png')} alt=""/>
            </div>

            <div className="Section5__Content-item">
                <img src={require('../assets/section5-5.png')} alt="" />
                <p>строительство</p>
                <span>Наша бригада приступает к<br />выполнению работы.</span>
                <span>05</span>
            </div>

            <div className="Section5__Content-arrow">
                <img src={require('../assets/double-arrow.png')} alt=""/>
            </div>

            <div className="Section5__Content-item">
                <img src={require('../assets/section5-6.png')} alt="" />
                <p>ваш дом</p>
                <span>Вы заезжаете в<br />свой дом.</span>
                <span>06</span>
            </div>
        </div>
    </div>
)

export default Section5;