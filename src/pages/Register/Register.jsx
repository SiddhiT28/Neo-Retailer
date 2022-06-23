import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { EyeCloseIcon, EyeOpenIcon } from '../../components/Icons';
import axios from 'axios';
import { API_URL } from '../../components/API/Constant';
import { useAuth } from "../../components/Context/AuthContext";
export const Register = () => {

    const { login } = useAuth();

    const Navigate = useNavigate();
    const [name, setName] = useState('');
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [phoneNumberInput, setPhoneNumberInput] = useState("");

    const updateShowPassword = () => {
        setShowPassword(prevState => !prevState);
    }

    const updateShowConfirmPassword = () => {
        setShowConfirmPassword(prevState => !prevState);
    }

    const updateNameValue = (e) => {
        setName(e.target.value);
    }

    const updateEmailInputValue = (e) => {
        setEmailInput(e.target.value);
    }

    const updatePasswordInputValue = (e) => {
        setPasswordInput(e.target.value);
    }

    const updateConfirmPasswordInputValue = (e) => {
        setConfirmPasswordInput(e.target.value);
    }

    const updatePhoneNumberInputValue = (e) => {
        setPhoneNumberInput(e.target.value);
    }

    const registerUser = () => {
        if (emailInput === "" && passwordInput === "" && confirmPasswordInput === "" && phoneNumberInput === "") {
            alert("Please enter your email and password");
        } else if (emailInput === " ") {
            alert("Please enter your email");
        } else if (passwordInput === " ") {
            alert("Please enter your password");
        }
        else if (confirmPasswordInput === " ") {
            alert("Please enter your confirm password");
        }
        else if (phoneNumberInput === " ") {
            alert("Please enter your phone number");
        }
        else if (passwordInput !== confirmPasswordInput) {
            alert("Your passwords do not match");
        }
        else {
            const user = {
                name: name,
                email: emailInput,
                password: passwordInput,
                phonenumber: phoneNumberInput
            }

            axios.post(`${API_URL}/vendor/register`, {
                ...user
            })
                .then(res => {
                    console.table(res.data);
                    login(res.data);
                    Navigate("/dashboard");
                })





        }
    }

    return (
        <div className='retailer_authentication_page'>

            <h1>Create your warehouse account!</h1>
            <form className='retailer_form'>
                <div className='form_grp'>
                    <label>Your name</label>
                    <input
                        value={name}
                        onChange={updateNameValue}
                        type='text'
                        placeholder='Enter your name here'

                    />
                </div>
                <div className='form_grp'>
                    <label>Email</label>
                    <input
                        value={emailInput}
                        onChange={updateEmailInputValue}
                        type='email'
                        placeholder='Enter your email'

                    />
                </div>
                <div className='form_grp'>
                    <label>Password</label>
                    <div className='password_grp'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={passwordInput}
                            onChange={updatePasswordInputValue}
                            placeholder='Enter your password' />
                        <button type='button' onClick={updateShowPassword}>
                            {
                                showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />
                            }
                        </button>
                    </div>
                </div>
                <div className='form_grp'>
                    <label>Confirm password</label>
                    <div className='password_grp'>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPasswordInput}
                            onChange={updateConfirmPasswordInputValue}
                            placeholder='Enter your password' />
                        <button type='button' onClick={updateShowConfirmPassword}>
                            {
                                showConfirmPassword ? <EyeOpenIcon /> : <EyeCloseIcon />
                            }
                        </button>
                    </div>
                </div>
                <div className='form_grp'>
                    <label>Phone number</label>
                    <input
                        value={phoneNumberInput}
                        onChange={updatePhoneNumberInputValue}
                        type='text'
                        max={10}
                        placeholder='+91-XXXXXXXXX'

                    />
                </div>
                <div className='form_grp'>
                    <p>
                        Already have an account?
                        <NavLink to={"/login"}> Login here</NavLink>
                    </p>
                </div>
                <div className='form_grp'>
                    <button type='button' onClick={registerUser}>Register</button>
                </div>
            </form>
        </div>
    )
}
