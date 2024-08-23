import React from 'react';
import Style from './addressForm.module.css';


function AddressForm({ formData, handleChange, handleSubmit, editId }) {
    return (
        <div className={Style.addNewAddress}>
            <p>{editId ? 'Edit your address' : 'Add a new address'}</p>
            <form onSubmit={handleSubmit} className={Style.addressForm}>
                <div className={Style.inputBox}>
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChange} value={formData.name} type="text" id="name" placeholder='Robert Parera' name="name" />
                </div>

                <div className={Style.inputBox}>
                    <label htmlFor="email">Email Address</label>
                    <input onChange={handleChange} value={formData.email} type="email" id="email" placeholder='robert.parera@example.com' name="email" />
                </div>

                <div className={Style.inputBox}>
                    <label htmlFor="number">Mobile Number</label>
                    <input onChange={handleChange} value={formData.number} type="number" id="number" placeholder='(219) 555-0114' name="number" />
                </div>

                <div className={Style.inputBox}>
                    <label htmlFor="adress">Flat, House no., Building, Company, Apartment</label>
                    <input onChange={handleChange} value={formData.adress} type="text" id="adress" placeholder='House No 23' name="adress" />
                </div>

                <div className={Style.inputBox}>
                    <label htmlFor="street">Area, Colony, Street, Sector, Village</label>
                    <input onChange={handleChange} value={formData.street} type="text" id="street" placeholder='Parker Rd. Allentown' name="street" />
                </div>

                <div className={Style.inputBox}>
                    <label htmlFor="city">City</label>
                    <input onChange={handleChange} value={formData.city} type="text" id="city" placeholder='New Mexico' name="city" />
                </div>

                <div className={Style.inputBox}>
                    <label htmlFor="pinCode">Pin Code</label>
                    <input onChange={handleChange} value={formData.pinCode} type="text" id="pinCode" placeholder='78274' name="pinCode" />
                </div>

                <div className={Style.inputBox}>
                    <label htmlFor="state">State</label>
                    <input onChange={handleChange} value={formData.state} type="text" id="state" placeholder='New Mexico' name="state" />
                </div>

                <button type="submit">{editId ? 'Update Address' : 'Add Address'}</button>
            </form>
        </div>
    );
}

export default AddressForm;
