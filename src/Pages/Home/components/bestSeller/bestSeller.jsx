import React, {  useState } from 'react';

// Style Component
import Style from './bestSeller.module.css';

// Assets
import imagePNG from '../../assets/bestSeller/image/Image.png';

// import uniqd 
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function BestSeller({ database }) {
    // Filter products to include only those that are bestsellers
    const bestSellerProducts = database.filter(product => product.bestSeller);

    const [products, setProducts] = useState(bestSellerProducts)

    return (
        <section className={Style.container}>

            <h2>Bestseller Products</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content.</p>

            <div className={Style.main}>

                <div className={Style.bannerIMG}>
                    <img src={imagePNG} alt="Image" />
                </div>

                <div className={Style.products}>
                    {products.map(product => (
                        <Link to={`/shop/${product.id}`} key={product.id} className={Style.product}>
                            <div className={Style.productIMG}>
                                <img src={product.img} alt={product.name} />
                            </div>
                            <p className={Style.productName}>{product.name}</p>
                            <p>
                                <span>{product.discountPrice ? `$${product.discountPrice}` : null}</span>
                                <span className={product.discountPrice ? Style.lineThrough : null}>{`$${product.price}`}</span>
                            </p>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default BestSeller;
