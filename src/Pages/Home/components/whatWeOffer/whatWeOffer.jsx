import React, { useState } from 'react'

// Style Component
import Style from './whatWeOffer.module.css'

// Assets 
import freeShippingSVG from '../../assets/whatWeOffer/icons/trolley.svg'
import moneyGuaranteeSVG from '../../assets/whatWeOffer/icons/money.svg'
import onlineSupportSVG from '../../assets/whatWeOffer/icons/clock.svg'
import flexiblePaymentSVG from '../../assets/whatWeOffer/icons/card.svg'

function WhatWeOffer() {

    const offers_ = [
        {
            icon: freeShippingSVG,
            name: 'Free Shipping',
            more: 'Free shipping for order above $150',
        }, {
            icon: moneyGuaranteeSVG,
            name: 'Money Guarantee',
            more: 'Within 30 days for an exchange',
        }, {
            icon: onlineSupportSVG,
            name: 'Online Support',
            more: '24 hours a day, 7 days a week',
        }, {
            icon: flexiblePaymentSVG,
            name: 'Flexible Payment',
            more: 'Pay with multiple credit cards',
        },
    ]

    const [offers , setOffers] = useState(offers_)

    return (
        <section className={Style.container}>

            {offers.map((offer, index) => {
                return <div key={index} className={Style.offer}>

                    <img src={offer.icon} />

                    <div className={Style.text}>
                        <h4>{offer.name}</h4>
                        <p>{offer.more}</p>
                    </div>
                </div>
            })}
        </section>
    )
}

export default WhatWeOffer