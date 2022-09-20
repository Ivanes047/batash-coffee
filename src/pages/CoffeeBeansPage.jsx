import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import { useSelector, useDispatch } from 'react-redux';
import { CoffeeDescription, MiniIcon } from '../components';
import UilShoppingCart from '@iconscout/react-unicons/icons/uil-shopping-cart';
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';
import { fetchCoffee } from "../redux/actions/coffee";
import {removeCartItem} from "../redux/actions/cart";

function CoffeeBeansPage() {

    const {id} = useParams()
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
        <HashLink to={"/coffee_beans/" + id +"/#call"}>
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
      <section className='coffee-beans'>
      {isLoaded && (           
        <CoffeeDescription
          {...items[id]}
          onClickAddCoffee={handleAddCoffeeToCart}
          onClickMinusCoffee={handleMinusCoffeeToCart}
          onRemove={onRemoveItem}
          isLoading={true} 
          addedCount={cartItems[items[id].id] && cartItems[items[id].id].items.length}
        />)
      }
      </section>
    </div>
  )
}

export default CoffeeBeansPage