import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { EyeCloseIcon, EyeOpenIcon } from '../../components/Icons';
import "./login.css";
import axios from 'axios';
import { useAuth } from '../../components/Context/AuthContext';
import { API_URL } from "../../components/API/Constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Login = () => {

    const { login } = useAuth();
    const Navigate = useNavigate();
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const updateShowPassword = () => {
        setShowPassword(prevState => !prevState);
    }

    const updateEmailInputValue = (e) => {
        setEmailInput(e.target.value);
    }

    const updatePasswordInputValue = (e) => {
        setPasswordInput(e.target.value);
    }

    const notify = (msg) => toast.error(msg, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const loginUser = () => {
        if (emailInput === "" && passwordInput === "") {
            alert("Please enter your email and password");
        } else if (emailInput === " ") {
            alert("Please enter your email");
        } else if (passwordInput === " ") {
            alert("Please enter your password");
        }
        else {
            const user = {
                email: emailInput,
                password: passwordInput
            }

            axios.post(`${API_URL}/vendor/login`, user)
                .then(res => {

                    console.log(res.data);

                    if (res.data.isInValid) {
                        notify(res.data.message);
                    } else {
                        login(res.data);
                        Navigate("/dashboard");
                    }

                })
                .catch(err => {
                    console.error(err);
                })


        }
    }

    return (
        <div className='retailer_authentication_page'>
            <ToastContainer />
            <h1>Login to your warehouse!</h1>
            <form className='retailer_form'>
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
                    <p>
                        Don't have an account?
                        <NavLink to={"/register"}> Register here</NavLink>
                    </p>
                </div>
                <div className='form_grp'>
                    <button type='button' onClick={loginUser}>Login</button>
                </div>
            </form>
        </div>
    )
}
