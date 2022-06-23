import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className='landing_page_nav'>
            <img src="/svgs/logo_solo.svg" width={80} alt='' />
            <h2>Retailer's Dashboard</h2>
            <ul className='page_nav_list'>
                <li className='nav_list_item'>
                    <NavLink to='/'>Home</NavLink>
                </li>
            </ul>
        </nav>
    )
}
