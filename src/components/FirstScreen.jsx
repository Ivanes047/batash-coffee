import React from 'react'
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram'
import UilVkAlt from '@iconscout/react-unicons/icons/uil-vk-alt'
import UilTelegramAlt from '@iconscout/react-unicons/icons/uil-telegram-alt'
import { Link } from "react-router-dom";

function FirstScreen() {
  return (
    <section className="first-screen" id="first-screen">
        <div className="container">
            <div className="fscreen">
                <div className="fscreen-fcol">
                    <h1>Ароматный, всегда свежий, кофе от BATASH</h1>
                    <p>Отберем, обжарим кофе индивидуально для вас и оперативно доставим по адресу</p>
                    <Link to="/coffee">
                    <div className="fscreen-btn">
                        Подобрать кофе
                    </div>
                    </Link>
                </div>
                <div className="fscreen-scol">
                    <div className="fscreen-img"></div>
                    <div className="fscreen-icons">
                        <a href="https://instagram/batashcoffee"><UilInstagram size="40"/></a>
                        <a href="https://vk.com/batash_coffee"><UilVkAlt size="40"/></a>
                        <a href="https://t.me/batash_coffee"><UilTelegramAlt size="40"/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FirstScreen