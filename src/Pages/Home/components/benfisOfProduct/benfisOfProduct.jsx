import React, { useState } from 'react'

// Styled Component
import Style from './benfisOfProduct.module.css'


// Assets
import naturalSVG from '../../assets/benfisOfProduct/icons/Icon.svg'
import productReplacementSVG from '../../assets/benfisOfProduct/icons/Group.svg'
import noSideEffectSVG from '../../assets/benfisOfProduct/icons/noDrugs.svg'
import allSkinTypeSVG from '../../assets/benfisOfProduct/icons/face.svg'
import productIMG from '../../assets/benfisOfProduct/image/Image.png'

function BenfisOfProduct() {

    const benfis_ = [
        {
            img: naturalSVG,
            feature: '100% Natural',
            subText: 'It is a long established fact that a reader will be distracted by the readable content.'
        }, {
            img: noSideEffectSVG,
            feature: 'No Side Effect',
            subText: 'It is a long established fact that a reader will be distracted by the readable content.'
        }, {
            img: allSkinTypeSVG,
            feature: 'All Skin Type',
            subText: 'It is a long established fact that a reader will be distracted by the readable content.'
        }, {
            img: productReplacementSVG,
            feature: 'Product Replacement',
            subText: 'It is a long established fact that a reader will be distracted by the readable content.'
        }
    ]

    const [benfis, setBenfis] = useState(benfis_)


    return (
        <section className={Style.BenfisOfProduct}>
            <section className={Style.container}>

                <h2>Benefit Using Our Product</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content.</p>

                <div className={Style.product}>
                    <div className={Style.benfis}>
                        {benfis.map((benfis, index) => {
                            return <div key={index} className={Style.box}>
                                <img src={benfis.img} style={{ fill: 'white' }} />

                                <h2>{benfis.feature}</h2>

                                <p>{benfis.subText}</p>
                            </div>
                        })}
                    </div>

                    <img src={productIMG} alt="Product Image" />
                </div>


            </section>
        </section>
    )
}

export default BenfisOfProduct