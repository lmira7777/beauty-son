import React, { useState, useEffect } from 'react';
import Style from './relatedProducts.module.css';
import products from '../../../DB/products';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from 'react-router-dom';

function RelatedProducts() {
    const relatedProducts = products.filter(p => p.rating === '5');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className={Style.container}>
            <h2>Related Products</h2>

            {isMobile ? (
                <div className={Style.productList}>
                    {relatedProducts.map((product, index) => (
                        <Link href={`/shop/${product.id}`} key={product.id} className={Style.product}>
                            <div className={Style.productIMG}>
                                <img src={product.img} alt="Product Image" />
                                <div className={Style.icons}>
                                    {/* Icons here */}
                                </div>
                            </div>
                            <p className={Style.productName}>{product.name}</p>
                            <p>
                                <span>{product.discountPrice ? `$${product.discountPrice}` : null}</span>
                                <span className={`${product.discountPrice ? Style.lineThrough : ''}`}>{`$${product.price}`}</span>
                            </p>
                        </Link>
                    ))}
                </div>
            ) : (
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    className={Style.products}
                >
                    {relatedProducts.map((product, index) => (
                        <SwiperSlide key={index}>
                            <a href={`/shop/${product.id}`} key={product.id} className={Style.product}>
                                <div className={Style.productIMG}>
                                    <img src={product.img} alt="Product Image" />
                                    <div className={Style.icons}>
                                        {/* Icons here */}
                                    </div>
                                </div>
                                <p className={Style.productName}>{product.name}</p>
                                <p>
                                    <span>{product.discountPrice ? `$${product.discountPrice}` : null}</span>
                                    <span className={`${product.discountPrice ? Style.lineThrough : ''}`}>{`$${product.price}`}</span>
                                </p>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    );
}

export default RelatedProducts;
