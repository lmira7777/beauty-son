import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Style from './navbar.module.css';
import logoSVG from '../../assets/Logo/Logo.svg';
import searchSVG from '../../assets/Logo/icons/search.svg';
import fovariteSVG from '../../assets/Logo/icons/like.svg';
import basketSVG from '../../assets/Logo/icons/basket.svg';
import Basket from '../basket/basket';
import LoginPopup from '../login/login';

function Navbar() {
    const navItems = [
        { name: 'Home', router: '/' },
        { name: 'Shop', router: '/shop' },
        { name: 'About', router: '/' },
        { name: 'Blog', router: '/' },
        { name: 'Contact Us', router: '/' }
    ];

    const [showBasket, setShowBasket] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const handleBasketClick = () => {
        setShowBasket(!showBasket);

    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        setShowLoginPopup(true);
    };

    const handleClosePopup = () => {
        setShowLoginPopup(false);
    };

    useEffect(() => {
        if (showBasket || showLoginPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showBasket, showLoginPopup]);

    return (
        <section className={Style.container}>
            {/* Brand Name */}

            <Link to={'/'} className={Style.brandName}>
                <svg xmlns="http://www.w3.org/2000/svg" width="159" height="36" viewBox="0 0 159 36" fill="none">
                    <path d="M2.17128 17.5585V16.0296H7.67522C9.05542 16.0296 10.3178 15.8226 11.4623 15.4086C12.6069 14.9945 13.5158 14.3734 14.1891 13.5453C14.8623 12.6853 15.199 11.6024 15.199 10.2965C15.199 8.44917 14.5089 7.01589 13.1287 5.99666C11.7821 4.94559 9.96432 4.42005 7.67522 4.42005H2.77722V33.1813H8.18017C9.96432 33.1813 11.5297 32.8946 12.8762 32.3213C14.2227 31.748 15.2663 30.9199 16.0069 29.8369C16.7475 28.7222 17.1178 27.3367 17.1178 25.6804C17.1178 24.5019 16.8821 23.4668 16.4108 22.575C15.9396 21.6513 15.2831 20.8869 14.4415 20.2817C13.6 19.6447 12.6406 19.1669 11.5633 18.8484C10.5198 18.5299 9.39205 18.3707 8.18017 18.3707H2.17128V16.8418H8.38215C9.82967 16.8418 11.2435 17.0329 12.6237 17.4152C14.0039 17.7655 15.2326 18.307 16.3098 19.0395C17.4207 19.7721 18.296 20.7117 18.9356 21.8583C19.6088 22.9731 19.9455 24.2949 19.9455 25.8238C19.9455 28.0215 19.4405 29.8369 18.4306 31.2702C17.4207 32.7035 16.0237 33.7705 14.2396 34.4712C12.4891 35.1719 10.4693 35.5223 8.18017 35.5223H0V2.07902H7.67522C9.79601 2.07902 11.6138 2.3816 13.1287 2.98676C14.6772 3.59193 15.8722 4.49968 16.7138 5.71001C17.5554 6.88848 17.9762 8.36954 17.9762 10.1532C17.9762 11.7776 17.5386 13.1472 16.6633 14.2619C15.8217 15.3449 14.6435 16.173 13.1287 16.7463C11.6138 17.2878 9.86333 17.5585 7.8772 17.5585H2.17128Z" fill="#040D08" />
                    <path d="M27.3785 35.5223V33.0379H44.9002V35.5223H27.3785ZM27.3785 4.56338V2.07902H44.9002V4.56338H27.3785ZM27.3785 24.2949V21.8106H55.2183V24.2949H27.3785ZM25.9141 2.07902H28.6914V35.5223H25.9141V2.07902Z" fill="#040D08" />
                    <path d="M54.7053 24.2949L55.6142 21.8106H103.672L104.581 24.2949H54.7053ZM63.6934 6.85663L56.8261 22.6705L56.5231 23.2438L51.2211 35.5223H48.0905L63.6934 0.789062L79.2963 35.5223H76.1656L70.9142 23.4349L70.6617 22.8139L63.6934 6.85663Z" fill="#040D08" />
                    <path d="M82.7169 2.07902H85.4942V24.7249C85.4942 27.4004 86.2347 29.5344 87.7159 31.1269C89.1971 32.7194 91.3011 33.5157 94.0278 33.5157C96.7545 33.5157 98.8585 32.7194 100.34 31.1269C101.821 29.5344 102.561 27.4004 102.561 24.7249V2.07902H105.339V24.7249C105.339 26.3811 105.086 27.91 104.581 29.3114C104.076 30.681 103.336 31.8595 102.359 32.8468C101.383 33.8342 100.188 34.6146 98.7743 35.1879C97.3941 35.7293 95.812 36.0001 94.0278 36.0001C92.2436 36.0001 90.6446 35.7293 89.2308 35.1879C87.8506 34.6146 86.6724 33.8342 85.6961 32.8468C84.7199 31.8595 83.9793 30.681 83.4744 29.3114C82.9694 27.91 82.7169 26.3811 82.7169 24.7249V2.07902Z" fill="#040D08" />
                    <path d="M109.047 4.56338V2.07902H130.407V4.56338H121.116V35.5223H118.338V4.56338H109.047Z" fill="#040D08" />
                    <path d="M155.273 2.07902H158.403L146.537 21.7628V35.5223H143.76V21.8106L132.095 2.07902H135.226L145.123 19.374L155.273 2.07902Z" fill="#040D08" />
                </svg>

            </Link>

            {/* Navigation */}
            <nav className={Style.navItems}>
                {navItems.map((item, index) => (
                    <Link key={index} to={item.router}>{item.name}</Link>
                ))}
            </nav>

            {/* Shortcuts */}
            <div className={Style.shortcuts}>
                <img src={searchSVG} alt="Search" />
                <img src={fovariteSVG} alt="Favorite" />
                <img className={Style.basket} src={basketSVG} alt="Basket" onClick={handleBasketClick} />
                <a href="#" onClick={handleLoginClick}>Login</a>
            </div>

            {/* Background Overlay and Basket */}
            {showBasket && (
                <>
                    <div className={Style.overlay} onClick={handleBasketClick}></div>
                    <Basket closeBasket={handleBasketClick} />
                </>
            )}

            {/* Login Popup */}
            {showLoginPopup && <LoginPopup onClose={handleClosePopup} />}
        </section>
    );
}

export default Navbar;
