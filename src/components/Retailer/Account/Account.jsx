import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../API/Constant';
import { useAuth } from '../../Context/AuthContext';
import "./account.css";

export const Account = () => {

    const { auth, user, updateUser } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phonenumbers, setPhonenumbers] = useState(user.phonenumbers);
    const [companyName, setCompanyName] = useState(user.companyName);
    const [gstNumber, setGstNumber] = useState(user.gstNumber);
    const [address, setAddress] = useState(user.address);
    const [bankDetials, setBankDetials] = useState(user.bankDetials);



    const handleSubmit = (e) => {
        const postData = {
            id: user.id,
            name: name,
            email: email,
            phonenumbers: phonenumbers,
            companyName: companyName,
            gstNumber: gstNumber,
            companyAddress: address,
            bankDetails: bankDetials

        }

        axios.post(`${API_URL}/vendor/getById`, {
            ...postData
        }).then(res => {
            updateUser();
        })
    }

    useEffect(() => {
        console.log(user);
        if (auth) {
            setName(user.name);
            setEmail(user.email);
            setPhonenumbers(user.phonenumbers);
            setCompanyName(user.companyName);
            setGstNumber(user.gstNumber);
            setAddress(user.companyAddress);
            setBankDetials(user.bankDetails);
        }
    }, [])

    if (!auth) {
        return null;
    }

    return (
        <section className='wrapper_lyt_account'>
            <form className='lyt_account_form'>
                <div className='form_input_grp'>
                    <label className='input_grp_label'>Your name</label>
                    <input
                        type="text"
                        placeholder="Mr/Ms"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        className='input_grp_text' />
                </div>
                <div className='form_input_grp'>
                    <label className='input_grp_label'>Your email</label>
                    <input
                        type="text"
                        placeholder="youremail@gmail.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        className='input_grp_text' />
                </div>
                <div className='form_input_grp'>
                    <label className='input_grp_label'>Your phone number</label>
                    <input
                        type="text"
                        placeholder="+91 XXXXXXXXX"
                        value={phonenumbers}
                        onChange={(e) => { setPhonenumbers(e.target.value) }}
                        className='input_grp_text' />
                </div>
                <div className='form_input_grp'>
                    <label className='input_grp_label'>Company Name</label>
                    <input
                        type="text"
                        placeholder="XYZ"
                        value={companyName}
                        onChange={(e) => { setCompanyName(e.target.value) }}
                        className='input_grp_text' />
                </div>

                <div className='form_input_grp'>
                    <label className='input_grp_label'>Company Address</label>
                    <input type="text"
                        placeholder="Address.."
                        value={address}
                        onChange={(e) => { setAddress(e.target.value) }}
                        className='input_grp_text' />
                </div>
                <div className='form_input_grp'>
                    <label className='input_grp_label'>Bank details</label>
                    <input
                        type="text"
                        placeholder="IFSC code"
                        value={bankDetials}
                        onChange={(e) => { setBankDetials(e.target.value) }}
                        className='input_grp_text' />
                </div>
                <div className='form_input_grp'>
                    <button type='button' onClick={handleSubmit} className='input_grp_btn'>
                        Save
                    </button>
                </div>
            </form>
        </section>
    )
}
