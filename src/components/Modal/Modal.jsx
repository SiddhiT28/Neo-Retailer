import React from 'react';
import "./modal.css";
import { CrossIcon } from "../Icons";


export const Modal = ({ children, title, setShow }) => {
    return (
        <div className='wrapper_modal_bg' onClick={setShow} >
            <div className='wrapper_modal_content' title={title} onClick={(e) => {
                e.stopPropagation();
            }}>
                <button className='close_modal_btn' title='Close' onClick={setShow}>
                    <CrossIcon />
                </button>
                <div className='modal_content_title'>
                    <p className='modal_title_text'>
                        {title}
                    </p>
                </div>

                {children}

            </div>
        </div>
    )
}
