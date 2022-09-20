import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';
import { MiniIcon, CartItem } from "../components";
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from "../redux/actions/cart";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser'

const SERVICE_ID = "";
const TEMPLATE_ID = "";
const PUBLIC_KEY = ""

function Cart() {

    React.useEffect(() => {
      window.scrollTo(0, 0)
    });

    const dispatch = useDispatch();
    const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
    const cartItems = useSelector(({ cart }) => cart.items);
  
    const addedPizzas = Object.keys(items).map((key) => {
      return items[key].items[0];
    });
  
    const onRemoveItem = (id) => {
      if (window.confirm('Вы действительно хотите удалить?')) {
        dispatch(removeCartItem(id));
      }
    };
  
    const onPlusItem = (id) => {
      dispatch(plusCartItem(id));
    };
  
    const onMinusItem = (id) => {
      dispatch(minusCartItem(id));
    };
    
    const handleOnSubmit = (e) => {
      e.preventDefault();

      const names = document.getElementsByClassName("title-coffee")
      const amounts = document.getElementsByClassName("amount-coffee")
      const prices = document.getElementsByClassName("price-coffee")
      let order = ""
      
      const count = document.getElementById("count")
      const price = document.getElementById("price")
      

      for (let i = 0; i < names.length; i++) {
        var amount = amounts[i].innerHTML.split('</svg>')[1];
        var amount = amount.split('<')[0];
        order += names[i].innerHTML + " - " +  amount + " - " + prices[i].innerHTML + "<br/>"
      }

      order += "Итого: " +  count.innerHTML + " - " + price.innerHTML + "<br/><br/>"
      order += "Заказчик: " + e.target.phone.value

      emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        order: order
      }, PUBLIC_KEY).then((result) => {
          Swal.fire({
            icon: 'success',
            title: 'Ваш заказ принят! Скоро с вами свяжется оператор'
          })
        }, (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Произошла ошибка. Сообщите о ней на почту Ivanes047@yandex.ru',
            text: error.text,
          })
        });

      dispatch(clearCart());
    }

  return (
    <div>
        <div className="mini-icons">
            <HashLink to="/cart/#call">
              <MiniIcon phone>
                  <UilPhone size="30"/>
              </MiniIcon>
            </HashLink>
        </div>
        <section className="cart" id="cart">
            <div className="container">
                <h2 className="screen-title">Корзина</h2>
                {
                totalCount ?
                
                    <form className="cart-block" onSubmit={handleOnSubmit} id="cart">
                        <div className="table-titles">
                            <div className="coffee-title">Название</div>
                            <div className="coffee-amount">Количество</div>
                            <div className="coffee-price">Сумма</div>
                        </div>
                        {addedPizzas.map((obj) => (
                        <CartItem
                            key={obj.id}
                            id={obj.id}
                            name={obj.name}
                            type={obj.type}
                            size={obj.size}
                            totalPrice={items[obj.id].totalPrice}
                            totalCount={items[obj.id].items.length}
                            onRemove={onRemoveItem}
                            onMinus={onMinusItem}
                            onPlus={onPlusItem}
                            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                        />
                        ))}
                        <div className="coffee-string total">
                            <div className="coffee-title" id="itog">Итого</div>
                            <div className="coffee-amount" id="count">{totalCount} кг</div>
                            <div className="coffee-price" id="price">{totalPrice} руб</div>
                        </div>

                        <div className="email-input">
                            Введите номер телефона: <input type="text" name='phone' size='30' required/>
                        </div>
                        <button type='submit' className="fscreen-btn cart-btn">
                            Оставить заявку
                        </button>
                    </form>
                :
                    <div className="empty-cart"><h3>В корзине ничего нет</h3><Link to="/coffee"><button className="fscreen-btn">Перейти в каталог</button></Link></div>}
            </div>
        </section>
    </div>
  )
}

export default Cart