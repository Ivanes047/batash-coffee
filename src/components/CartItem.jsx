import React from 'react'
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilMinus from '@iconscout/react-unicons/icons/uil-minus';


const CartItem = ({ id, name, type, size, totalPrice, totalCount, onRemove, onMinus, onPlus, addedCount }) => {


    const handleRemoveClick = () => {
        onRemove(id);
    };
    
    const handlePlusItem = () => {
        onPlus(id);
    };
    
    const handleMinusItem = () => {
        onMinus(id);
    };

    return (
        <div className="coffee-string">
            <div className="title-coffee">{name}</div>
            <div className="amount-coffee">
                <UilMinus size={20} onClick={ addedCount > 1 ? handleMinusItem : handleRemoveClick}/>
                {totalCount} кг
                <UilPlus size={20} onClick={handlePlusItem}/>
            </div>
            <div className="price-coffee">{totalPrice} руб</div>
            <div className="coffee-delete" onClick={handleRemoveClick}><UilTrashAlt/></div>
        </div>
    )
}

export default CartItem