// ReviewOrder.js
import React, { useState, useEffect } from 'react';
import Style from './reviewOrder.module.css';
import OrderProducts from './components/orderProducts/orderProducts';
import OrderAddress from './components/orderAddress/orderAddress';
import OrderCard from './components/orderCard/orderCard';
import Subtotal from '../../components/subtotal/subtotal';
import PaymentNavigation from '../../components/paymentNavigation/paymentNavigation';
import OrderConfirmed from '../../components/orderConfirmed/orderConfirmed';
import { Link } from 'react-router-dom';

function ReviewOrder() {
    const [products, setProducts] = useState([]);
    const [address, setAddress] = useState({});
    const [payment, setPayment] = useState({});
    const [currentDate, setCurrentDate] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);

    useEffect(() => {
        // Set the current date
        const today = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        setCurrentDate(today.toLocaleDateString('en-GB', options));

        // Fetch data from local storage
        const userAddress = JSON.parse(localStorage.getItem('addresses')) || [];
        const currentAddress = userAddress.find(address => address.currentAddress === true);
        setAddress(currentAddress);

        const userPayment = JSON.parse(localStorage.getItem('creditCardInfo')) || {};
        setPayment(userPayment);

        const basketProduct = JSON.parse(localStorage.getItem('productBasket')) || [];
        setProducts(basketProduct);
    }, []);

    const showConfrimedOrder = () => {
        setIsConfirmed(!isConfirmed);
    };

    return (
        <section className={Style.container}>
            <div>
                <Link to={'/shop'} className={Style.backBTN}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="#040D08" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Link>

                <h2>Review Order</h2>
                <PaymentNavigation />
                <h5>Estimated delivery: {currentDate}</h5>

                <OrderProducts products={products} />
                <OrderAddress address={address} />
                <OrderCard payment={payment} />
            </div>

            <Subtotal text={"Place Order"} onPopUp={showConfrimedOrder} />

            {isConfirmed && <OrderConfirmed onPopUp_={showConfrimedOrder} />}
        </section>
    );
}

export default ReviewOrder;
