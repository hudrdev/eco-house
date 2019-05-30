import React from 'react';

const Section4 = () => (
    <div className="Section4">
        <h2 className="Section4__Title">проекты клиентов</h2>

        <div className="Section4__Content1">
            <div className="Section4__Content1-images">
                <img src={require('../assets/section4-p1-1.jpg')} alt=""/>
                <img src={require('../assets/section4-p1-2.jpg')} alt=""/>
                <img src={require('../assets/section4-p1-3.jpg')} alt=""/>
                <img src={require('../assets/section4-p1-4.jpg')} alt=""/>
                <img src={require('../assets/section4-p1-5.jpg')} alt=""/>
            </div>

            <div className="Section4__Content1-description">
                <h3 className='Section4__Content1-description-title'>modern house 016</h3>
                <div className='Section4__Content1-description-loc'>
                    <img src={require('../assets/pin.png')} alt=""/>
                    <p>г.Санкт-Петербург</p>
                </div>
                <div className="Section4__Content1-description-circle">
                    <p>8<br />месяцев</p>
                    <span>Срок<br />постройки</span>
                </div>
                <div className="Section4__Content1-description-circle">
                    <p>11<br />миллионов</p>
                    <span>Жилая<br />площадь</span>
                </div>
                <div className="Section4__Content1-description-circle">
                    <p>122,5 м<sup>2</sup></p>
                    <span>Жилая<br />площадь</span>
                </div>
                <div className="Section4__Content1-description-circle">
                    <p>130,5 м<sup>2</sup></p>
                    <span>Общая<br />площадь</span>
                </div>

                <div className="Section4__Content1-description-comment">
                    <p>"Построили как хотели"</p>
                    <span>Спасибо за шикарный дом. Построили в срок, без задержек</span>
                    <span>Александра</span>
                    <img src={require('../assets/stamp-award.png')} alt=""/>
                </div>
            </div>
        </div>

        <div className="Section4__Content2">
            <div className="Section4__Content2-images">
                <img src={require('../assets/section4-p2-1.jpg')} alt=""/>
                <img src={require('../assets/section4-p2-2.jpg')} alt=""/>
                <img src={require('../assets/section4-p2-3.jpg')} alt=""/>
                <img src={require('../assets/section4-p2-4.jpg')} alt=""/>
                <img src={require('../assets/section4-p2-5.jpg')} alt=""/>
            </div>

            <div className="Section4__Content2-description">
                <h3 className='Section4__Content2-description-title'>modern house 005</h3>
                <div className='Section4__Content2-description-loc'>
                    <img src={require('../assets/pin.png')} alt=""/>
                    <p>г.Казань</p>
                </div>
                <div className="Section4__Content2-description-circle">
                    <p>8<br />месяцев</p>
                    <span>Срок<br />постройки</span>
                </div>
                <div className="Section4__Content2-description-circle">
                    <p>11<br />миллионов</p>
                    <span>Жилая<br />площадь</span>
                </div>
                <div className="Section4__Content2-description-circle">
                    <p>122,5 м<sup>2</sup></p>
                    <span>Жилая<br />площадь</span>
                </div>
                <div className="Section4__Content2-description-circle">
                    <p>130,5 м<sup>2</sup></p>
                    <span>Общая<br />площадь</span>
                </div>

                <div className="Section4__Content2-description-comment">
                    <p>"Качество на высоте"</p>
                    <span>Хочу выразить благодарность всему коллективу. Профессионалы своего дела. Спасибо.</span>
                    <span>Виктор</span>
                    <img src={require('../assets/stamp-award.png')} alt=""/>
                </div>
            </div>
        </div>
    </div>
)

export default Section4;