import React, { useEffect, useState } from 'react';

import Style from './productList.module.css'



function ProductList() {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        const basketProduct = JSON.parse(localStorage.getItem('productBasket')) || [];
        setProducts(basketProduct);
    }, []);


    const handleRemoveProduct = (id) => {
        const storedItems = JSON.parse(localStorage.getItem('productBasket')) || [];

        const updatedItems = storedItems.filter(item => item.id !== id);

        localStorage.setItem('productBasket', JSON.stringify(updatedItems));

        setProducts(updatedItems);
    }

    return (
        <section className={Style.container}>
                

            {/* Left */}
            <div className={Style.products}>

                <table>

                    <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>



                    {products.map((item, index) => {
                        const { product, quantity, id } = item;

                        return (
                            <tr>
                                <td>
                                    <div className={Style.product}>
                                        <div className={Style.productIMG}>
                                            <img src={product.img} alt="Product Image" />
                                        </div>
                                        <div className={Style.productText}>
                                            <h2>{product.name}</h2>
                                            <p>Color: {product.colors}</p>
                                        </div>
                                    </div>
                                </td>

                                <td className={Style.price} >${product.price}</td>

                                <td className={Style.quantity}> {quantity}</td>

                                <td className={Style.subtotal}>${quantity * product.price}</td>

                                <td   >
                                    <svg className={Style.removeItem} onClick={() => handleRemoveProduct(id)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4.16667 6.66699V15.0003C4.16667 16.8413 5.65905 18.3337 7.5 18.3337H12.5C14.3409 18.3337 15.8333 16.8413 15.8333 15.0003V6.66699M11.6667 9.16699V14.167M8.33333 9.16699L8.33333 14.167M13.3333 4.16699L12.1614 2.40916C11.8523 1.94549 11.3319 1.66699 10.7747 1.66699H9.22531C8.66805 1.66699 8.14767 1.94549 7.83856 2.40916L6.66667 4.16699M13.3333 4.16699H6.66667M13.3333 4.16699H17.5M6.66667 4.16699H2.5" stroke="#F87171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </td>
                            </tr>
                        );
                    })}

                </table>

            </div>

        </section>
    )
}

export default ProductList