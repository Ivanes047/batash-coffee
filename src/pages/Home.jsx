import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import { FirstScreen, MiniIcon } from '../components'
import service from '../img/service.jpeg';
import about from '../img/about.png';
import delivery from '../img/delivery.png';
import UilShoppingCart from '@iconscout/react-unicons/icons/uil-shopping-cart';
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';


function Home() {

    function scrollTop() {
        window.scrollTo(0, 0)
    }

    React.useEffect(() => {
        scrollTop()
    });

  return (
    <div>
        <div className="mini-icons">
            <HashLink to={"/#call"}>
                <MiniIcon phone>
                    <UilPhone size="30"/>
                </MiniIcon>
            </HashLink>
            <Link to="/cart">
                <MiniIcon>
                    <UilShoppingCart size="30"/>
                </MiniIcon> 
            </Link>
        </div>
        <FirstScreen />
        <section className="service" id="service">
            <div className="container">
                <h2 className="screen-title">Услуги</h2>
                <div className="service-block">
                    <img src={service} alt="" />
                    <div>
                        <h3 className="service-title">Обучим вас варить кофе</h3>
                        <p className="service-desc">Индивидуальная программа обучения для бариста и обжарщиков кофе, консультации по продукту для владельцев баров, кафе, ресторанов.</p>
                        <HashLink to={"/#call"}><div className="card-buy service-btn">Записаться на занятие</div></HashLink>
                    </div>
                </div>
            </div>
        </section>
        <section className="delivery" id="delivery">
            <div className="container">
                <h2 className="screen-title">Доставка</h2>
                <div className="service-block">
                    <div>
                        <p className="service-desc">У нас вы можете заказать доставку или забрать кофе сами:</p>
                        <ul>
                            <li className="service-desc">Курьерская доставка по Москве - 450 рублей / Московской области – 600р. Совершенно бесплатно доставим по Москве/МО от 20 кг. Срок доставки после поступления денежных средств на расчетный счет 1-3 дня. Так же доставляем по всей России транспортными компаниями, СДЭК, Деловые Линии и т.д.</li>
                            <li className="service-desc">Cамовывоз осуществляется из пункта выдачи, расположенного по адресу д. Мисайлово, Литературный бульвар 4 (Кофейня BATASH COFFEE). За подробной информацией по заказу обращайтесь по номеру 8(906)700-38-88.</li>
                        </ul>
                    </div>
                    <img src={delivery} alt="" />
                </div>
            </div>
        </section>
        <section className="about" id="about">
               <div className="container">
                <div className="about-block">
                    <div className="fcol">
                        <h2 className="screen-title">О компании</h2>
                        <p className="text">Мы – компания «BATASH Coffee», и мы обжариваем лучшее кофейное зерно!</p>
                        <p className="text">В это необычное время, мы готовы сделать для Вас индивидуальное предложение по цене и условиям доставки!</p>
                        <p className="text">Только отборные сорта арабики и робусты из лучших кофепроизводящих стран. И только от лучших российских обжарщиков! В нашем ассортименте Вы найдете смеси 100 % арабики и смеси с добавлением прекрасной робусты. Весь кофе обжаривается и упаковывается на собственных производственных мощностях. Мы поможем с выбором и проконсультируем по преимуществам всех видов заваривания нашего кофе!</p>
                        <p className="text">Компания «BATASH Coffee» выполняет поставки сертифицированной продукции, соответствующей ГОСТ 32775-2014 «Кофе жареный». Вся продукция сертифицирована и является обязательным сопровождением груза.</p>
                    </div>
                    <div className="scol">
                        <img src={about} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Home