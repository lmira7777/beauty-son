import React from 'react'

import Style from './myCart.module.css'
import ProductList from './components/productList/productList'
import Subtotal from '../../components/subtotal/subtotal'
import { Link } from 'react-router-dom'



function MyCart() {

    return (
        <section className={Style.container}>

            <Link to={'/shop'} className={Style.backBTN}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="#040D08" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Link>

            <h3>My Cart</h3>

            <div>
                <ProductList />
                <Subtotal link={'/shipping-address'} text={"Proceed to Checkout"} />
            </div>
        </section>
    )
}

export default MyCart