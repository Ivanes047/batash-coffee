import React from 'react'
import coffee from '../../img/coffee.png'
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilMinus from '@iconscout/react-unicons/icons/uil-minus';
import classNames from 'classnames'
import { COFFEE_BEANS_ROUTE } from '../../utils/consts';

function CoffeeCart({ id, name, price, onClickAddCoffee, addedCount, onClickMinusCoffee, onRemove }) {

    const navigate = useNavigate()

    const onAddCoffee = () => {
      const obj = {
        id,
        name,
        price,
      };
      onClickAddCoffee(obj);
    };

    const onMinusCoffee = () => {
      onClickMinusCoffee(id);
    };

    const handleRemoveClick = () => {
      onRemove(id);
    };

  return (
    <div className="card">
        <img src={coffee} onClick={() => navigate(COFFEE_BEANS_ROUTE + '/' + id)}/>
        <h3 className="card-title" onClick={() => navigate(COFFEE_BEANS_ROUTE + '/' + id)}>{name}</h3>
        <div className="card-info">
            <p className="card-cost" onClick={() => navigate(COFFEE_BEANS_ROUTE + '/' + id)}>{price} руб/кг</p>
            <div className={classNames("card-btn", {'d-none': !addedCount})}>
                <div className="card-minus" onClick={ addedCount > 1 ? onMinusCoffee : handleRemoveClick}><UilMinus size={20}/></div>
                <div className="card-amount">{addedCount} кг</div>
                <div className="card-plus" onClick={onAddCoffee}><UilPlus size={20}/></div>
            </div>
            <div className={classNames("card-btn", {'d-none': addedCount})}>
              <button className="card-buy" onClick={onAddCoffee}>
                  В корзину
              </button>
            </div>
        </div>
    </div>
  )
}

CoffeeCart.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  onClickAddCoffee: PropTypes.func,
  addedCount: PropTypes.number,
}

CoffeeCart.defaultProps = {
  name: "Название кофе",
  price: 0,
  imageSrc: "https://images.unsplash.com/photo-1517055813639-0ae179305650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
}

export default CoffeeCart