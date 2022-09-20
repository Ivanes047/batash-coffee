import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import { MiniIcon } from '../components'
import UilShoppingCart from '@iconscout/react-unicons/icons/uil-shopping-cart';
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';

function NotFound() {
  return (
    <div>
      <div className="mini-icons">
                <HashLink to={"/notfound/#call"}>
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
      <section className='call not-found'>
          <h2>Страница не найдена</h2>
      </section>
    </div>
  )
}

export default NotFound