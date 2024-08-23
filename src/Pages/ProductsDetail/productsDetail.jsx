import React, { useEffect } from 'react'

// Styled Component
import Style from './productsDetail.module.css'

// Import Components
import Detail from './detail/detail'
import ProductAbout from './productAbout/productAbout'

// Use Component
import { useParams } from 'react-router-dom';

// Import DataBase
import productsDB from '../../DB/products'
import RelatedProducts from './relatedProducts/relatedProducts';

function ProductsDetail() {

    const { productId } = useParams();

    const product = productsDB.find(p => p.id === productId);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <section className={Style.container}>
            <Detail props={product} />
            <ProductAbout props={product} />
            <RelatedProducts/>
        </section>
    )
}

export default ProductsDetail