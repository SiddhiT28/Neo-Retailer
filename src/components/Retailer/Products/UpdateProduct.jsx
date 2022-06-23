import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../API/Constant';
import "./updateProduct.css";
export const UpdateProduct = (props) => {


    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productStock, setProductStock] = useState('');
    const [productDiscount, setProductDiscount] = useState('');
    const [productPrice, setProductPrice] = useState('');


    useEffect(() => {

        axios.get(`${API_URL}/product/getOne`, {
            params: {
                id: props.id
            }
        })
            .then(res => {
                setProduct(res.data);
                setProductName(res.data.name);
                setProductDescription(res.data.description);
                setProductStock(res.data.numberOfProducts);
                setProductDiscount(res.data.discounts);
                setProductPrice(res.data.price);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })

        return () => {
            setProduct({});
            setProductName('');
            setProductDescription('');
            setProductStock('');
            setProductDiscount('');
            setProductPrice('');
        }

    }, [])


    const updateProduct = () => {
        axios.post(`${API_URL}/product/update`, {
            id: props.id,
            name: productName,
            description: productDescription,
            price: productPrice,
            numberOfProducts: productStock,
            discount: productDiscount
        })
            .then(res => {
                props.toggleModal();
                props.refresh();
            })
            .catch(err => {
                console.log(err);
            })
    }


    if (loading) return <p>Loading...</p>

    return (
        <form className='form hide-scrollbar'>
            <div className='form-group'>
                <label htmlFor='name'>Product Id</label>
                <input type='text' className='form-control' id='name' placeholder='ID' value={product.id} disabled />
            </div>

            <div className='form-group'>
                <label htmlFor='name'>Product Name</label>
                <input type='text' className='form-control' id='name' placeholder='Enter product name' value={productName} onChange={(e) => {
                    setProductName(e.target.value);
                }} />
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Product Description</label>
                <textarea type='text' className='form-control' id='name' placeholder='Enter product description' value={productDescription} onChange={(e) => {
                    setProductDescription(e.target.value)
                }} />
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Product Price</label>
                <input type='text' className='form-control' id='name' placeholder='Enter your product price' value={productPrice} onChange={(e) => {
                    setProductPrice(e.target.value)
                }} />
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Product Stock</label>
                <input type='text' className='form-control' id='name' placeholder='Number of products in your stock' value={productStock} onChange={(e) => {
                    setProductStock(e.target.value)
                }} />
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Product Discount</label>
                <input type='text' className='form-control' id='name' placeholder='Add discount' value={productDiscount} onChange={(e) => {
                    setProductDiscount(e.target.value);
                }} />
            </div>
            <button type='button' className='form-submit-btn' onClick={updateProduct}>Update</button>
        </form>
    )
}
