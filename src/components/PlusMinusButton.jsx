import React from 'react'
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilMinus from '@iconscout/react-unicons/icons/uil-minus';

function PlusMinusButton(children) {
  return (
    <div className="card-btn">
        <div className="card-plus"><UilPlus size={20}/></div>
        <div className="card-amount">{children} кг</div>
        <div className="card-minus"><UilMinus size={20}/></div>
    </div>
  )
}

export default PlusMinusButton