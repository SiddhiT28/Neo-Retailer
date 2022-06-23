import React from 'react'
import { useAuth } from '../../Context/AuthContext';
import { AddProductModel } from './AddProductModel';
import "./products.css";
import { ProductTable } from './ProductTable';


export const Products = () => {

    const [showModal, setShowModal] = React.useState(false);

    const { user } = useAuth();

    const toggleModal = () => {
        setShowModal(!showModal);
    }



    return (
        <div className='retailer_products_view'>

            {
                showModal && <AddProductModel id={user.id} toggleModal={toggleModal} />
            }

            <div className='retailer_products_title'>
                <h1>All Products</h1>
            </div>
            <button onClick={toggleModal} className='retailer_products_cta'>
                Add new Product
            </button>
            <div className='retailer_products_container'>
                <ProductTable />
            </div>
        </div>
    )
}
