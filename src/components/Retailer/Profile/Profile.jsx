import React from 'react'
import { useAuth } from '../../Context/AuthContext';
import "./profile.css";

export const Profile = ({ updateSelected }) => {

    const { user } = useAuth();

    return (
        <div className='wrapper_profile_lyt'>
            <ul className='profile_view_list'>
                <li className='profile_view_list_item'>
                    <p className='list_item_userName'>{user.name}</p>
                    <p className='list_item_userDisplayName'>@{user.name.replace(" ", '')}</p>
                </li>
                <li className='profile_view_list_item'>
                    <p className='list_item_userEmail'>{user.email}</p>
                </li>

                <li className='profile_view_list_item'>
                    <p className='list_item_userPhone'>+91 {user.phonenumbers}</p>
                </li>

                <li className='profile_view_list_item'>

                    {
                        user.bankDetails === " " ? (
                            <>
                                <p className='list_item_userStatus'>
                                    <span className='item_userStatus_label'>Account</span> NOT ACTIVE
                                </p>
                                <button className='item_userStatus_cta' onClick={() => { updateSelected("profile") }}>
                                    <p className='item_userStatus_label'>Activate</p>
                                </button>
                            </>
                        ) : (
                            <>
                                <p className='list_item_userStatus'>
                                    <span className='item_userStatus_label'>Account</span> ACTIVE
                                </p>
                            </>
                        )
                    }
                </li>
            </ul>
        </div>
    )
}
