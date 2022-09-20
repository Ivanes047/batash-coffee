import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import { useSelector, useDispatch } from 'react-redux';
import { MiniIcon, CoffeeCard, CoffeeLoadingCard } from '../components'
import UilShoppingCart from '@iconscout/react-unicons/icons/uil-shopping-cart';
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';
import { fetchCoffee } from "../redux/actions/coffee";
import {removeCartItem} from "../redux/actions/cart";

function CoffeePage() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchCoffee())
        window.scrollTo(0, 0)
    }, []);

    const items = useSelector(({ coffee }) => coffee.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ coffee }) => coffee.isLoaded);

    const handleAddCoffeeToCart = (obj) => {
        dispatch({
            type: 'ADD_COFFEE_CART',
            payload: obj
        })
    }

    const handleMinusCoffeeToCart = (obj) => {
        dispatch({
            type: 'MINUS_CART_ITEM',
            payload: obj
        })
    }

    const onRemoveItem = (id) => {
        dispatch(removeCartItem(id));
    };
    

    return (
        <div>
            <div className="mini-icons">
                <HashLink to={"/coffee/#call"}>
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
            <section className="coffee" id="coffee">
                <div className="container">
                    <h2 className="screen-title">Кофе</h2>
                    
                    <div className="card-block">
                        { isLoaded ? items.map((obj) => 
                            (<CoffeeCard key={obj.id}
                            {...obj}
                            onClickAddCoffee={handleAddCoffeeToCart}
                            onClickMinusCoffee={handleMinusCoffeeToCart}
                            onRemove={onRemoveItem}
                            isLoading={true} 
                            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}/>
                        )):
                            Array(9).fill(0).map((_, index) => <CoffeeLoadingCard key={index}/>
                        )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CoffeePage