import React, { useEffect, useState } from 'react';
import Style from './shippingAddress.module.css';
import AddressForm from './components/addressForm/addressForm';
import AddressList from './components/addressList/addressList';
import Subtotal from '../../components/subtotal/subtotal';
import Button from '../../components/button/button';
import PaymentNavigation from '../../components/paymentNavigation/paymentNavigation';
import { Link } from 'react-router-dom';

function ShippingAddress() {
    const [addresses, setAddresses] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        adress: '',
        street: '',
        city: '',
        pinCode: '',
        state: '',
    });
    const [editId, setEditId] = useState(null);
    const [hasCurrentAddress, setHasCurrentAddress] = useState(false);

    useEffect(() => {
        const storedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
        setAddresses(storedAddresses);
        setHasCurrentAddress(storedAddresses.some(address => address.currentAddress));
    }, []);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let updatedAddresses;

        if (editId) {
            updatedAddresses = addresses.map(address =>
                address.id === editId ? { ...formData, id: editId } : address
            );
        } else {
            const newAddress = { ...formData, id: Date.now(), currentAddress: false };
            updatedAddresses = [...addresses, newAddress];
        }

        localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
        setAddresses(updatedAddresses);
        setHasCurrentAddress(updatedAddresses.some(address => address.currentAddress));

        setFormData({
            name: '',
            email: '',
            number: '',
            adress: '',
            street: '',
            city: '',
            pinCode: '',
            state: '',
        });
        setEditId(null);
    };

    const handleDelete = (id) => {
        const updatedAddresses = addresses.filter(address => address.id !== id);
        setAddresses(updatedAddresses);
        localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
        setHasCurrentAddress(updatedAddresses.some(address => address.currentAddress));
    };

    const handleEdit = (address) => {
        setFormData(address);
        setEditId(address.id);
    };

    const handleCheckboxChange = (id) => {
        const updatedAddresses = addresses.map(address => {
            if (address.id === id) {
                return { ...address, currentAddress: true };
            }
            return { ...address, currentAddress: false };
        });

        setAddresses(updatedAddresses);
        localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
        setHasCurrentAddress(updatedAddresses.some(address => address.currentAddress));
    };

    return (
        <section className={Style.container}>

            <Link to={'/shop'} className={Style.backBTN}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="#040D08" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Link>

            <h2>Shipping Address</h2>

            <div>
                <div className={Style.address}>
                    <PaymentNavigation />

                    <h2>Select a delivery address</h2>
                    <p>Is the address you'd like to use displayed below? If so, click the corresponding "Deliver to this address" button. Or you can enter a new delivery address.</p>

                    <AddressList
                        addresses={addresses}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                    <Button link_={'/payment-method'} text_={"Deliver Here"} disabled={!hasCurrentAddress} />
                    <AddressForm
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        editId={editId}
                    />
                </div>

                <Subtotal />
            </div>

        </section>
    );
}

export default ShippingAddress;
