import React, { useEffect, useState } from 'react';
import Style from './basket.module.css';
import { Link } from 'react-router-dom';

function Basket({closeBasket}) {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const basketProduct = JSON.parse(localStorage.getItem('productBasket')) || [];
    setProducts(basketProduct);
  }, []);

  useEffect(() => {
    handleSubtotal();
  }, [products]);

  const handleRemoveProduct = (id) => {
    const storedItems = JSON.parse(localStorage.getItem('productBasket')) || [];
    const updatedItems = storedItems.filter(item => item.id !== id);
    localStorage.setItem('productBasket', JSON.stringify(updatedItems));
    setProducts(updatedItems);
  }

  const handleSubtotal = () => {
    const totalPrice = products.reduce((total, item) => {
      const price = parseFloat(item.product.price);
      return total + (price * item.quantity);
    }, 0);

    setTotalPrice(totalPrice);
  };

  const isCheckoutDisabled = products.length === 0;

  return (
    <section className={Style.container}>
      <p>You have <span>{products.length} items</span> in your cart</p>

      <div className={Style.products}>
        {products.length > 0 && products.map((item, index) => {
          const { product, quantity, id } = item;

          return (
            <div key={index} className={Style.item}>
              <div className={Style.product}>
                <div className={Style.productIMG}>
                  <img src={product.img} alt="Product Image" />
                </div>

                <div className={Style.productAbout}>
                  <h3 className={Style.name}>{product.name}</h3>
                  <p className={Style.price}>${product.price}</p>
                  <p className={Style.orderCount}>QTY: <span>{quantity}</span></p>
                </div>
              </div>

              <div onClick={() => handleRemoveProduct(id)} className={Style.removeItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16667 6.66699V15.0003C4.16667 16.8413 5.65905 18.3337 7.5 18.3337H12.5C14.3409 18.3337 15.8333 16.8413 15.8333 15.0003V6.66699M11.6667 9.16699V14.167M8.33333 9.16699L8.33333 14.167M13.3333 4.16699L12.1614 2.40916C11.8523 1.94549 11.3319 1.66699 10.7747 1.66699H9.22531C8.66805 1.66699 8.14767 1.94549 7.83856 2.40916L6.66667 4.16699M13.3333 4.16699H6.66667M13.3333 4.16699H17.5M6.66667 4.16699H2.5" stroke="#F87171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          );
        })}
        {products.length === 0 && <p>Your basket is empty.</p>}
      </div>

      <div className={Style.checkout}>
        <div className={Style.subtotal}>
          <p>Subtotal</p>
          <span>${totalPrice}</span>
        </div>
        <button id={Style.viewCartBTN}>View Cart</button>
        <Link to='/mycart' id={Style.checkoutBTN} onClick={closeBasket} className={isCheckoutDisabled ? Style.disabled : ''}>Checkout</Link>
      </div>
    </section>
  );
}

export default Basket;
