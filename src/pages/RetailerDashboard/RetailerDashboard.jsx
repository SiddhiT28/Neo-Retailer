import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../components/API/Constant';
import { useAuth } from '../../components/Context/AuthContext';
import { Orders } from '../../components/Retailer/Orders/Orders';
import { Products } from '../../components/Retailer/Products/Products';
import { Profile } from '../../components/Retailer/Profile/Profile';
import { Dashboard } from '../../components/Retailer/Dashboard/Dashboard';
import "./retailerDashboard.css";
import { Account } from '../../components/Retailer/Account/Account';


export const RetailerDashboard = () => {

    const { logout, login } = useAuth();
    const [selected, setSelected] = useState("dashboard");
    const Navigate = useNavigate();
    const updateSelected = (newValue) => {
        setSelected(newValue);
    }

    const logoutUser = () => {
        logout();
        Navigate("/");
    }

    useEffect(() => {
        if (!sessionStorage.getItem('auth')) {
            Navigate("/login");
        } else {
            const user = JSON.parse(sessionStorage.getItem('user'));
            axios.get(`${API_URL}/vendor/getById`, {
                params: {
                    id: user.userId
                }
            }).then(res => {
                login(res.data);
            })
        }
    }, [])


    return (
        <section className='retailer_dashboard_lyt'>
            <header className='retailer_dashboard_header'>
                <img src='/svgs/logo_solo.svg' width={80} alt='logo' />

                <button onClick={logoutUser}>Logout </button>
            </header>
            <nav className='retailer_dashboard_nav'>
                <ul className='dashboard_nav_list'>
                    <li
                        onClick={() => updateSelected("dashboard")}
                        className={selected === 'dashboard' ? 'nav_list_item selected' : 'nav_list_item'}>
                        Dashboard
                    </li>
                    <li
                        onClick={() => updateSelected("products")}
                        className={selected === 'products' ? 'nav_list_item selected' : 'nav_list_item'}>
                        Products</li>
                    <li
                        onClick={() => updateSelected("orders")}
                        className={selected === 'orders' ? 'nav_list_item selected' : 'nav_list_item'}>Orders
                    </li>
                    <li
                        onClick={() => updateSelected("profile")}
                        className={selected === 'profile' ? 'nav_list_item selected' : 'nav_list_item'}>
                        Profile
                    </li>
                </ul>
            </nav>

            <div className='retailer_dashboard_view'>
                {selected === 'dashboard' && <Dashboard updateSelected={updateSelected} />}
                {selected === 'products' && <Products />}
                {selected === 'orders' && <Orders />}
                {selected === 'profile' && <Account />}
            </div>

        </section>
    )
}
