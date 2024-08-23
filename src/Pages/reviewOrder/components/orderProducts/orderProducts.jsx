import React from 'react';
import Style from './orderProducts.module.css';

function OrderProducts({ products }) {
    return (
        <div className={Style.products}>
            {products.map((item, index) => (
                <div key={index} className={Style.item}>
                    <div className={Style.product}>
                        <div className={Style.productIMG}>
                            <img src={item.product.img} alt="Product Image" />
                        </div>
                        <div className={Style.productAbout}>
                            <h3 className={Style.name}>{item.product.name}</h3>
                            <div className={Style.productDetails}>
                                <p className={Style.price}>${item.product.price}</p>
                                <p className={Style.orderCount}>QTY: <span>{item.quantity}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OrderProducts;
