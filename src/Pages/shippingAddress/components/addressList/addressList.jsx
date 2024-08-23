import React from 'react';
import Style from './addressList.module.css';

function AddressList({ addresses, handleEdit, handleDelete, handleCheckboxChange }) {
    return (
        <div className={Style.boxs}>
            {addresses.map(address => (
                <div key={address.id} className={Style.box}>
                    <h4>
                        <input
                            type="checkbox"
                            checked={address.currentAddress || false}
                            onChange={() => handleCheckboxChange(address.id)}
                        />
                        {address.name}
                    </h4>
                    <p>{address.adress}, {address.street}, {address.city} - {address.pinCode}</p>
                    <div className={Style.buttons}>
                        <div onClick={() => handleEdit(address)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M3 17.5H18M11.987 4.42643C11.987 4.42643 11.987 5.78861 13.3492 7.1508C14.7114 8.51299 16.0736 8.51299 16.0736 8.51299M6.59969 14.9901L9.46028 14.5814C9.87291 14.5225 10.2553 14.3313 10.55 14.0365L17.4358 7.1508C18.1881 6.39848 18.1881 5.17874 17.4358 4.42642L16.0736 3.06424C15.3213 2.31192 14.1015 2.31192 13.3492 3.06424L6.46347 9.94997C6.16873 10.2447 5.97754 10.6271 5.91859 11.0397L5.50994 13.9003C5.41913 14.536 5.964 15.0809 6.59969 14.9901Z" stroke="#040D08" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <span>Edit</span>
                        </div>
                        <div onClick={() => handleDelete(address.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4.16667 6.66699V15.0003C4.16667 16.8413 5.65905 18.3337 7.5 18.3337H12.5C14.3409 18.3337 15.8333 16.8413 15.8333 15.0003V6.66699M8.33333 9.16732V14.1673M11.6667 9.16732V14.1673M2.5 6.66699H17.5M12.0833 3.33366H7.91667C7.02017 3.33366 6.29425 4.05958 6.29425 4.95608V5.00032H13.7057V4.95608C13.7057 4.05958 12.9798 3.33366 12.0833 3.33366Z" stroke="#040D08" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Delete</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AddressList;
