import React from 'react'
import coffee from '../img/coffee.png'
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilMinus from '@iconscout/react-unicons/icons/uil-minus';
import classNames from 'classnames'

function CoffeeDescription({ id, name, price, description, acidity, bitterness, sweetness, onClickAddCoffee, addedCount, onClickMinusCoffee, onRemove }) {

  const onAddCoffee = () => {
    const obj = {
      id,
      name,
      price,
      description,
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
      <div className="container">
        <div className="beans">
          <div className='card-beans'>
              <img src={coffee}/>
              <h3 className="card-title">{name}</h3>
          </div>
          <div className='beans-right'>
            <div className="beans-desc">
                <p>Описание: {description}</p>
                <div className={classNames('specific', {'d-none': !acidity})}>
                  <span>Кислотность: {acidity}</span><br/>
                  <span>Горечь: {bitterness}</span><br/>
                  <span>Сладость: {sweetness}</span><br/>
                </div>
            </div>
            <div className="beans-info">
              <p className="card-cost">{price} руб/кг</p>
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
        </div>
      </div>
  )
}

export default CoffeeDescription