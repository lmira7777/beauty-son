import React from 'react'

// Style Component
import Style from './banner.module.css'

// import Assets
import arrowSVG from '../../assets/banner/icons/arrow-right.svg'
import bannerIMG from '../../assets/banner/image/BannerIMG.svg'

function Banner() {
    return (
        <section className={Style.container}>

            {/* Left */}
            <div className={Style.text}>
                <h3>Made for you!</h3>
                <h2>Unleash Your Divine
                    Beauty With Us</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

                <a href=""> Start Now <img src={arrowSVG} /> </a>
            </div>


            {/* Right */}
            <div className={Style.bannerIMG}>
                <img src={bannerIMG} alt="Capsule Image" />
            </div>

        </section>
    )
}

export default Banner