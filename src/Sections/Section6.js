import React from 'react';

const Section6 = () => (
    <div className="Section6">
        <div className="Section6__Map">
            <div className="Section6__Map-container">
                <div className="Section6__Map-container-overlay">
                    <div className='Section1__Logo'>
                        <img src={require('../assets/house.png')} alt='' />
                        <div>
                            <p className="Section1__Logo-1">Eco house</p>
                            <p className="Section1__Logo-2">Строительство Эко-Домов</p>
                        </div>
                    </div>
                    <div className="Section6__Map-container-overlay-loc">
                        <img src={require('../assets/pin.png')} alt=""/>
                        <p>г.Москва ул.Суздальская 88</p>
                    </div>
                    <div className="Section1__Phone">
                        <p className="Section1__Phone-number">+7 (888) 888 88 88</p>
                        <a href='localhost' className="Section1__Phone-1">заказать обратный звонок</a>
                        <p className="Section1__Phone-2">Работаем с 7:00 до 20:00 ежедневно</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="Section6__Footer">
            <div className='Section1__Logo'>
                <img src={require('../assets/house.png')} alt='' />
                <div>
                    <p className="Section1__Logo-1">Eco house</p>
                    <p className="Section1__Logo-2">Строительство Эко-Домов</p>
                </div>
            </div>
            <a href="localhost">Политика конфиденциальности</a>

            <img src={require('../assets/iconVK.png')} alt=""/>
            <img src={require('../assets/iconFB.png')} alt=""/>
            <img src={require('../assets/iconYoutube.png')} alt=""/>

            <span>Разработка сайта студия KrakArt</span>
        </div>
    </div>
)

export default Section6;