import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram'
import UilVkAlt from '@iconscout/react-unicons/icons/uil-vk-alt'
import UilTelegramAlt from '@iconscout/react-unicons/icons/uil-telegram-alt'
import UilPhone from '@iconscout/react-unicons/icons/uil-phone'
import UilEnvelopeAlt from '@iconscout/react-unicons/icons/uil-envelope-alt'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="footer-block">
                <div className="fcol">
                    <div className="footer-title"><img src='./logo.svg' alt="" /></div>
                    <div className="menu">
                        <div className="contacts">
                            <div className="contact">
                                <UilPhone size="30"/>
                                <a href="tel:+79539731990">8(953) 973-19-90</a>
                            </div>
                            <div className="contact">
                                <UilInstagram size="30"/>
                                <a href="https:instagram.com/batashcoffee">@batashcoffee</a>
                            </div>
                            <div className="contact">
                                <UilVkAlt size="30"/>
                                <a href="https:vk.com/batash_coffee">@batash_coffee</a>
                            </div>
                            <div className="contact">
                                <UilTelegramAlt size="30"/>
                                <a href="http://t.me/batash_coffee">@batash_coffee</a>
                            </div>
                            <div className="contact">
                                <UilEnvelopeAlt size="30"/>
                                <a href="mailto:batash.info@bk.ru">batash.info@bk.ru</a>
                            </div>
                        </div>
                        <div className="nav">
                            <ul className="footer-menu">
                                <li><Link to="/coffee">Кофе</Link></li>
                                <li><HashLink to="/#service">Услуги</HashLink></li>
                                <li><HashLink to="/#delivery">Доставка</HashLink></li>
                                <li><HashLink to="/#about">О компании</HashLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="scol">
                    <iframe title='Карта' src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa21252cf63acbab12cf5a18d5226bcded902210abe4596f5580153cd2a051e1b&amp;source=constructor" width="400" height="280" frameBorder="0"></iframe>
                    <p className="address">Адрес: д. Мисайлово, Литературный бульвар д. 6А</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer