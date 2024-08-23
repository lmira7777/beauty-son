import React from 'react'
import Style from './paymentNavigation.module.css'

function PaymentNavigation() {
    return (
        <div className={Style.paymentNavigation}>
            <hr />
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M18 14.9727V8.45894C18 7.4498 17.5503 6.49407 16.7751 5.85576L12.6084 2.42478C11.3814 1.41439 9.61859 1.4144 8.39155 2.42478L4.22488 5.85576C3.4497 6.49407 3 7.4498 3 8.45894V14.9727C3 16.8289 4.49238 18.3337 6.33333 18.3337H14.6667C16.5076 18.3337 18 16.8289 18 14.9727Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M8.8335 15H12.1668" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>Address</span>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M2.1665 5.83333C2.1665 3.99238 3.65889 2.5 5.49984 2.5H15.4998C17.3408 2.5 18.8332 3.99238 18.8332 5.83333V14.1667C18.8332 16.0076 17.3408 17.5 15.4998 17.5H5.49984C3.65889 17.5 2.1665 16.0076 2.1665 14.1667V5.83333Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M2.1665 5.83301H18.8332V9.16634H2.1665V5.83301Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M7.16667 14.167H5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

                <span>Payment Method</span>

            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6.66667 8.33366H13.3333M6.66667 11.667H13.3333M6.66667 15.0003H10M6.66667 3.33366C6.66667 4.25413 7.41286 5.00033 8.33333 5.00033H11.6667C12.5871 5.00033 13.3333 4.25413 13.3333 3.33366M6.66667 3.33366C6.66667 2.41318 7.41286 1.66699 8.33333 1.66699H11.6667C12.5871 1.66699 13.3333 2.41318 13.3333 3.33366M6.66667 3.33366H5.83333C3.99238 3.33366 2.5 4.82604 2.5 6.66699V15.0003C2.5 16.8413 3.99238 18.3337 5.83333 18.3337H14.1667C16.0076 18.3337 17.5 16.8413 17.5 15.0003V6.66699C17.5 4.82604 16.0076 3.33366 14.1667 3.33366H13.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

                <span>Review</span>

            </div>
        </div>
    )
}

export default PaymentNavigation