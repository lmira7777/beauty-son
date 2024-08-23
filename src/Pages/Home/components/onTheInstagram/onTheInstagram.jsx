import React, { useState } from 'react'

// Style Component
import Style from './onTheInstagram.module.css'

// Assets
import image1 from '../../assets/onTheInstagam/Image_1.png'
import image2 from '../../assets/onTheInstagam/Image_2.png'
import image3 from '../../assets/onTheInstagam/Image_3.png'
// import image4 from '../../assets/onTheInstagam/Image'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";




function OnTheInstagram() {


    const posts_ = [
        {
            img: image1
        },
        {
            img: image2
        },
        {
            img: image3
        }, {
            img: image3
        }
    ]

    const [posts, setPosts] = useState(posts_)


    return (
        <section className={Style.container}>

            <h2>On The Instagram</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content.</p>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
              
                className={Style.boxs}>
                {
                    posts.map(post => {
                        return <SwiperSlide  className={Style.box}>
                            <img src={post.img} />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </section>
    )
}

export default OnTheInstagram