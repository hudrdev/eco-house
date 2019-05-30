import React from 'react';

import Line from '../Elements/Line';
import ButtonLink from '../Elements/ButtonLink';
import Pdf from '../Elements/Pdf';

const Section2 = () => (
    <div className="Section2">
        <Line />

        <h2 className="Section2__Title">проекты домов</h2>

        <div className="Section2__Content1">
            <div className="Section2__Content1-images">
                <img src={require('../assets/section2-p1-1.jpg')} alt=""/>
                <img src={require('../assets/section2-p1-2.jpg')} alt=""/>
                <img src={require('../assets/section2-p1-3.jpg')} alt=""/>
                <img src={require('../assets/section2-p1-4.jpg')} alt=""/>
                <img src={require('../assets/section2-p1-5.jpg')} alt=""/>
            </div>

            <img className="Section2__bg-1" src={require('../assets/section2-bg1.jpg')} alt='' />

            <div className="Section2__Content1-description">
                <h3 className='Section2__Content1-description-title'>modern house 007</h3>
                <p className='Section2__Content1-description-text'>
                    Этот проект предстовляет собой красивый и уютный
                    одноэтажный дом с многокаскадной кровлей, эркером и камином
                    на террасе. Его внешний традиционный архитектурный стиль
                    прекрасно сочетается с современной практичной
                    планировкой интерьера.
                </p>
                <div className="Section2__Content1-description-circle">
                    <p>134,1 м<sup>2</sup></p>
                    <span>Жилая<br />площадь</span>
                </div>
                <div className="Section2__Content1-description-circle">
                    <p>134,1 м<sup>2</sup></p>
                    <span>Общая<br />площадь</span>
                </div>
                <ButtonLink
                    text='Получить консультацию'
                    pic='call' />
                <Pdf />
            </div>
        </div>

        <div className="Section2__Content2">
            <div className="Section2__Content2-images">
                <img src={require('../assets/section2-p2-1.jpg')} alt=""/>
                <img src={require('../assets/section2-p2-2.jpg')} alt=""/>
                <img src={require('../assets/section2-p2-3.jpg')} alt=""/>
                <img src={require('../assets/section2-p2-4.jpg')} alt=""/>
                <img src={require('../assets/section2-p2-5.jpg')} alt=""/>
            </div>

            <img className="Section2__bg-2" src={require('../assets/section2-bg2.jpg')} alt='' />

            <div className="Section2__Content1-description">
                <h3 className='Section2__Content1-description-title'>modern house 007</h3>
                <p className='Section2__Content1-description-text'>
                    Этот проект предстовляет собой красивый и уютный
                    одноэтажный дом с многокаскадной кровлей, эркером и камином
                    на террасе. Его внешний традиционный архитектурный стиль
                    прекрасно сочетается с современной практичной
                    планировкой интерьера.
                </p>
                <div className="Section2__Content1-description-circle">
                    <p>134,1 м<sup>2</sup></p>
                    <span>Жилая<br />площадь</span>
                </div>
                <div className="Section2__Content1-description-circle">
                    <p>134,1 м<sup>2</sup></p>
                    <span>Общая<br />площадь</span>
                </div>
                <ButtonLink
                    text='Получить консультацию'
                    pic='call' />
                <Pdf />
            </div>
        </div>
    </div>
)

export default Section2;