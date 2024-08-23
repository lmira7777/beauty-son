import React from 'react'
import { Link } from 'react-router-dom';

import Style from './orderConfirmed.module.css'


function OrderConfirmed({onPopUp_}) {
    return (
        <section className={Style.container}>

            <div className={Style.popUp}>

                <div className={Style.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>


                <h3>Your Order is Confirmed</h3>

                <p>Thanks for shopping! <br />
                    your order hasn’t shipped yet,
                    <br />
                    but we will send you and email when it done.</p>


                <button onClick={onPopUp_} className={Style.viewOrder} >View Order</button>
                <button className={Style.backToHome} ><Link to={'/'} > Back to Home </Link></button>
            </div>

        </section>
    )
}

export default OrderConfirmed