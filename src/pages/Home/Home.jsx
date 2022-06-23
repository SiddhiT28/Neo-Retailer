import React from 'react';
import "./home.css";
import { NavLink } from 'react-router-dom';

export const Home = () => {
    return (
        <div className='retailer_landing_page'>
            <nav className='landing_page_nav'>
                <img src="/svgs/logo_solo.svg" width={80} alt='' />
                <h2>Retailer's Dashboard</h2>
                <ul className='page_nav_list'>
                    <li className='nav_list_item'>
                        <a href='#home'> Home</a>
                    </li>
                    <li className='nav_list_item'>
                        <a href='#about'> About</a>
                    </li>
                    <li className='nav_list_item'>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                </ul>
            </nav>

            <main className='retailers_main_section'>
                <section id='home' className='main_section_hero'>
                    <h2>
                        Add products to sell them here.
                    </h2>
                    <p>Sell products and earn some money</p>
                    <img src='/svgs/hero_section.svg' alt='' width={500} />
                </section>

                <section id="about" className='main_section_about'>
                    <h2 className='section_about_title'>About</h2>
                    <i className='section_about_neo'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </i>

                    <ul className='section_about_developer'>
                        <li className='about_developer_details'>
                            <img className='developer_details_image' src='/image/siddhi.png' alt='' width={100} />
                            <p>Siddhi Thoke</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </li>
                        <li className='about_developer_details'>
                            <img src='/image/saloni.png' alt='' width={100} className='developer_details_image' />
                            <p>Saloni Deshmukh</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </li>
                    </ul>
                </section>

            </main>

        </div>
    )
}
