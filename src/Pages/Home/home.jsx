import React, { useState } from 'react'

// Style Component [CSS]
import Style from './home.module.css'


// Import Component
import Banner from './components/banner/banner'
import Category from './components/category/category'
import BestSeller from './components/bestSeller/bestSeller'
import BenfisOfProduct from './components/benfisOfProduct/benfisOfProduct'
import WhatWeOffer from './components/whatWeOffer/whatWeOffer'
import HappyClient from './components/happyClient/happyClient'
import OnTheInstagram from './components/onTheInstagram/onTheInstagram'


// Import DB
import DB from '../../DB/products'

function Home() {

    const [products, setProducts] = useState(DB)

    return (
        <section className={Style.container}>
            <Banner />
            <Category />
            <BestSeller database={products} />
            <BenfisOfProduct />
            <WhatWeOffer/>
            <HappyClient/>
            <OnTheInstagram/> 
        </section>
    )
}

export default Home