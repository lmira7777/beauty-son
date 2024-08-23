// Subtotal.js
import React, { useEffect, useState } from 'react';
import Style from './subtotal.module.css';
import Button from '../button/button';

function Subtotal({ link, onPopUp, text }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryPrice, setDeliveryPrice] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const basketProduct = JSON.parse(localStorage.getItem('productBasket')) || [];
        setProducts(basketProduct);
    }, []);

    useEffect(() => {
        handleSubtotal();
    }, [products]);

    const handleSubtotal = () => {
        const totalPrice = products.reduce((total, item) => {
            const price = parseFloat(item.product.price);
            return total + (price * item.quantity);
        }, 0);

        setTotalPrice(totalPrice);
    };

    return (
        <section className={Style.container}>
            <div className={Style.subtotal}>
                <p>Subtotal</p>
                <span>${totalPrice}</span>
            </div>

            <div className={Style.discountCode}>
                <p>Enter Discount Code</p>
                <form action="">
                    <input placeholder='FLAT30' type="text" />
                    <input type="submit" value={"Apply"} />
                </form>
            </div>

            <div className={Style.deliveryChange}>
                <p>Delivery Charge</p>
                <span>${deliveryPrice}</span>
            </div>

            <div className={Style.grandTotal}>
                <p >Grand Total</p>
                <span>${totalPrice + deliveryPrice}</span>
            </div>

            <Button onPopUp_={onPopUp} text_={text} link_={link} />
        </section>
    );
}

export default Subtotal;
