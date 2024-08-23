import React, { useState } from 'react'

// Style components
import Style from './footer.module.css'

// Assets
import instagramPNG from '../../assets/Footer/icons/Social icon.svg'
import facebookPNG from '../../assets/Footer/icons/Group.svg'
import twitterPNG from '../../assets/Footer/icons/Vector.svg'
import logoSVG from '../../assets/Logo/white.svg'

function Footer() {

    const navItems = [
        {
            name: 'Home',
            router: ''
        }, {
            name: 'Shop',
            router: ''
        }, {
            name: 'About',
            router: ''
        }, {
            name: 'Blog',
            router: ''
        }, {
            name: 'Contact Us',
            router: ''
        }
    ]

    const [items, setItems] = useState(navItems)

    const SM_ = [
        {
            icon: instagramPNG,
            link: 'www.instagram.com'
        }, {
            icon: facebookPNG,
            link: 'www.facebook.com'
        }, {
            icon: twitterPNG,
            link: 'www.twitter.com'
        },
    ]

    const [sosialMedia, set_sosialMedia] = useState(SM_)

    return (
        <section className={Style.container}>

            <div className={Style.brandName}>
                <svg xmlns="http://www.w3.org/2000/svg" width="197" height="47" viewBox="0 0 197 47" fill="none">
                    <path d="M2.70003 22.2869V20.2776H9.54431C11.2606 20.2776 12.8304 20.0055 14.2537 19.4613C15.6769 18.9171 16.8072 18.1008 17.6444 17.0124C18.4816 15.8821 18.9002 14.4589 18.9002 12.7426C18.9002 10.3146 18.0421 8.43089 16.3258 7.09134C14.6513 5.70993 12.3909 5.01922 9.54431 5.01922H3.45353V42.8197H10.1722C12.3909 42.8197 14.3374 42.4429 16.0118 41.6894C17.6863 40.9359 18.984 39.8476 19.9049 38.4243C20.8258 36.9592 21.2863 35.1382 21.2863 32.9614C21.2863 31.4126 20.9933 30.0521 20.4072 28.88C19.8212 27.666 19.0049 26.6614 17.9584 25.866C16.9118 25.0288 15.7188 24.4009 14.3793 23.9823C13.0816 23.5636 11.6792 23.3543 10.1722 23.3543H2.70003V21.345H10.4234C12.2234 21.345 13.9816 21.5962 15.6979 22.0985C17.4142 22.559 18.9421 23.2706 20.2817 24.2334C21.6631 25.1962 22.7514 26.4311 23.5468 27.9381C24.384 29.4032 24.8026 31.1405 24.8026 33.1498C24.8026 36.0382 24.1747 38.4243 22.9189 40.308C21.6631 42.1918 19.9258 43.5941 17.7072 44.5151C15.5304 45.436 13.0188 45.8965 10.1722 45.8965H0V1.94244H9.54431C12.1816 1.94244 14.442 2.34012 16.3258 3.13548C18.2514 3.93084 19.7375 5.12388 20.784 6.71459C21.8305 8.26345 22.3538 10.21 22.3538 12.5542C22.3538 14.6891 21.8096 16.4891 20.7212 17.9543C19.6747 19.3775 18.2095 20.4659 16.3258 21.2194C14.442 21.9311 12.2653 22.2869 9.79547 22.2869H2.70003Z" fill="white" />
                    <path d="M34.0457 45.8965V42.6313H55.8344V45.8965H34.0457ZM34.0457 5.2076V1.94244H55.8344V5.2076H34.0457ZM34.0457 31.1405V27.8753H68.6651V31.1405H34.0457ZM32.2248 1.94244H35.6783V45.8965H32.2248V1.94244Z" fill="white" />
                    <path d="M68.0272 31.1405L69.1575 27.8753H128.919L130.049 31.1405H68.0272ZM79.2041 8.22159L70.6645 29.0056L70.2877 29.7591L63.6946 45.8965H59.8015L79.2041 0.24707L98.6067 45.8965H94.7136L88.1833 30.0102L87.8693 29.1939L79.2041 8.22159Z" fill="white" />
                    <path d="M102.86 1.94244H106.314V31.7056C106.314 35.2219 107.235 38.0266 109.077 40.1197C110.919 42.2127 113.535 43.2592 116.926 43.2592C120.316 43.2592 122.933 42.2127 124.775 40.1197C126.616 38.0266 127.537 35.2219 127.537 31.7056V1.94244H130.991V31.7056C130.991 33.8824 130.677 35.8917 130.049 37.7336C129.421 39.5336 128.5 41.0825 127.286 42.3802C126.072 43.6778 124.586 44.7034 122.828 45.4569C121.112 46.1686 119.144 46.5244 116.926 46.5244C114.707 46.5244 112.719 46.1686 110.96 45.4569C109.244 44.7034 107.779 43.6778 106.565 42.3802C105.351 41.0825 104.43 39.5336 103.802 37.7336C103.174 35.8917 102.86 33.8824 102.86 31.7056V1.94244Z" fill="white" />
                    <path d="M135.603 5.2076V1.94244H162.163V5.2076H150.61V45.8965H147.156V5.2076H135.603Z" fill="white" />
                    <path d="M193.085 1.94244H196.978L182.222 27.8125V45.8965H178.768V27.8753L164.264 1.94244H168.157L180.464 24.673L193.085 1.94244Z" fill="white" />
                </svg>
            </div>

            <div className={Style.contactUS}>
                <p>(319) 555-0115</p>
                <p>info@beauty.com</p>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>


            <h2>We Are Looking Forward To Your Visit!</h2>


            <nav className={Style.navItems}>
                {items.map((item, index) => {
                    return <a key={index} href={item.router} >{item.name}</a>
                })}
            </nav>



            <div >
                <p>©2023 Beauty All Rights are reserved️ </p>



                <ul className={Style.sosialMedia}>

                    {sosialMedia.map((media, index) => {
                        return <a key={index} href={media.link}>
                            <img src={media.icon} />
                        </a>
                    })}

                </ul>
            </div>
        </section>
    )
}

export default Footer