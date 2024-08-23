import React, { useState } from 'react'

// Style components
import Style from './happyClient.module.css'

// Assets 
import albertFloresPNG from '../../assets/happyClient/profile1.png'
import codyFisher from '../../assets/happyClient/profile2.png'
import jennyWilson from '../../assets/happyClient/profile3.png'
import fiveStar from '../../assets/happyClient/icons/fiveStar.svg'


// import uniqd 
import { v4 as uuidv4 } from 'uuid';

function HappyClient() {

    const comments_ = [
        {
            id: uuidv4(),
            userPhoto: albertFloresPNG,
            userName: 'Albert Flores',
            userJobs: 'Founder',
            titile: '“It’s Unbelievable, I Really Like it”',
            userComment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        }, {
            id: uuidv4(),
            userPhoto: codyFisher,
            userName: 'Cody Fisher',
            userJobs: 'Owner & Founder',
            titile: '“Truly Amazing with Makeup Kit”',
            userComment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: uuidv4(),
            userPhoto: jennyWilson,
            userName: 'Jenny Wilson',
            userJobs: 'Entrepreneur ',
            titile: '“One of the Best Cosmetic Product”',
            userComment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        }
    ]

    const [comments, setComments] = useState(comments_);

    return (
        <div className={Style.container}>
            <h3>Feelings of Our Happy Client’s</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content. </p>

          
            <div className={Style.comments}>
                {comments.map(comment => {
                    return <div className={Style.box}>
                        <img src={fiveStar} />

                        <div className={Style.profile}>
                            <img src={comment.userPhoto ? comment.userPhoto : null} />

                            <div className={Style.nameAndJobs}>
                                <h3>{comment.userName}</h3>
                                <p>{comment.userJobs}</p>
                            </div>
                        </div>

                        <div className={Style.comment}>
                            <h3>{comment.titile}</h3>
                            <p>{comment.userComment}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default HappyClient