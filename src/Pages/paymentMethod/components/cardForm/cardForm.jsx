import React, { useState } from 'react';
import Style from './cardForm.module.css';
import Button from '../../../../components/button/button';

function CardForm() {
    const [selectedPayment, setSelectedPayment] = useState('creditCard');
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvv: ''
    });

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (selectedPayment === 'creditCard') {
            localStorage.setItem('creditCardInfo', JSON.stringify(formData));
        }
        // Add similar handling for PayPal and Cash on Delivery if needed

        // Clear the form
        setFormData({
            cardNumber: '',
            cardHolderName: '',
            expiryDate: '',
            cvv: ''
        });
    };

    return (
        <section className={Style.container}>

            <h3>Select a payment method</h3>

            <div className={Style.creditCard}>
                <p>
                    <input
                        type="radio"
                        value="creditCard"
                        checked={selectedPayment === 'creditCard'}
                        onChange={handlePaymentChange}
                    />
                    Credit/Debit Card
                </p>
                {selectedPayment === 'creditCard' && (
                    <form onSubmit={handleSubmit}>
                        <div className={Style.inputBox}>
                            <label htmlFor="cardNumber">Card Number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                placeholder='8900 2671 4788 XX70'
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={Style.inputBox}>
                            <label htmlFor="cardHolderName">Card Holder Name</label>
                            <input
                                type="text"
                                id="cardHolderName"
                                placeholder='Robert Parera'
                                name="cardHolderName"
                                value={formData.cardHolderName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={Style.inputBox}>
                            <label htmlFor="expiryDate">Expiry Date</label>
                            <input
                                type="text"
                                id="expiryDate"
                                placeholder='09/28'
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={Style.inputBox}>
                            <label htmlFor="cvv">CVV</label>
                            <input
                                type="text"
                                placeholder='•••'
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                            />
                        </div>
                        <Button link_={'/review-order'} text_={'Pay Now'} />
                    </form>
                )}
            </div>

            <div className={Style.payPal}>
                <p>
                    <input
                        type="radio"
                        value="payPal"
                        checked={selectedPayment === 'payPal'}
                        onChange={handlePaymentChange}
                    />
                    PayPal
                </p>
                {selectedPayment === 'payPal' && (
                    <form onSubmit={handleSubmit}>
                        {/* PayPal form fields */}
                        <input type="submit" value="Pay Now" />
                    </form>
                )}
            </div>

            <div className={Style.cashOnDelivery}>
                <p>
                    <input
                        type="radio"
                        value="cashOnDelivery"
                        checked={selectedPayment === 'cashOnDelivery'}
                        onChange={handlePaymentChange}
                    />
                    Cash on Delivery
                </p>
                {selectedPayment === 'cashOnDelivery' && (
                    <form onSubmit={handleSubmit}>
                        {/* Cash on Delivery form fields */}
                        <input type="submit" value="Pay Now" />
                    </form>
                )}
            </div>
        </section>
    );
}

export default CardForm;
