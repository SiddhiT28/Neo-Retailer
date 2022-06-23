import React from 'react';
import axios from "axios";
import { API_URL } from "../../API/Constant";
import { useAuth } from '../../Context/AuthContext';
export const AddProductModel = ({ toggleModal, id }) => {


    const [productDetails, setProductDetails] = React.useState({
        name: '',
        amount: '',
        stock: '',
        brand: '',
        category: '',
        image: '',
        description: '',
    });

    const [image, setImage] = React.useState(null);

    const [checkbox, setCheckbox] = React.useState([]);

    const categoryList = [
        {
            name: 'Electronics',
            value: 'electronics'
        },
        {
            name: 'Fashion',
            value: 'fashion'
        },
        {
            name: 'Casual',
            value: 'casual'
        },
        {
            name: 'Sports',
            value: 'sports'
        },
        {
            name: 'Fancy',
            value: 'fancy'
        },
        {
            name: 'Clothes',
            value: 'clothes'
        },
        {
            name: 'Footwear',
            value: 'footwear'
        },
        {
            name: "Men's",
            value: 'men'
        },
        {
            name: "Women's",
            value: 'women'
        },
        {
            name: 'Phone',
            value: 'mobilePhone'
        },
        {
            name: 'Laptop',
            value: 'laptop'
        },
        {
            name: 'Desktop',
            value: 'desktop'
        },
        {
            name: 'Accessories',
            value: 'accessories'
        },
        {
            name: 'Others',
            value: 'others'
        },
    ]

    const handleChange = (e) => {
        setProductDetails(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));


    }

    const handleCheckbox = (e) => {
        setCheckbox(prev => {
            if (e.target.checked) {
                return [...prev, e.target.value]
            } else {
                return prev.filter(item => item !== e.target.value)
            }
        });
    }

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        setProductDetails(prev => {
            return {
                ...prev,
                category: checkbox,
                image: image
            }
        });

        const formData = new FormData();
        formData.append('name', productDetails.name);
        formData.append('amount', productDetails.amount);
        formData.append('stock', productDetails.stock);
        formData.append('brand', productDetails.brand);
        formData.append('category', JSON.stringify(checkbox));
        formData.append('image', image, image.name);
        formData.append('description', productDetails.description);
        formData.append('createdBy', id);

        console.log(formData);


        axios.post(`${API_URL}/product/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(res => {
                console.log(res.data);
                toggleModal();
            })
            .catch(res => {
                console.log(res.data);
            });

    }

    return (
        <div className='addProductModel_background' onClick={toggleModal}>
            <form className='addProductModel_content' onClick={(e) => e.stopPropagation()}>
                <h2>
                    Add new product
                </h2>
                <div className='form_input_grp'>
                    <label>Title</label>
                    <input type={"text"} name="name" onChange={handleChange} placeholder={"Enter your products title here"} />
                </div>
                <div className='form_input_grp'>
                    <label>Description</label>
                    <textarea name='description' onChange={handleChange} placeholder={"Describe your product"} />
                </div>
                <div className='form_input_grp'>
                    <label>Category</label>
                    <ul className='input_grp_checkbox'>
                        {
                            categoryList.map((category, index) => {
                                return (
                                    <li key={index}>
                                        <input name='category' type={"checkbox"} value={category.value} placeholder={"Enter category in which your product belongs"} onChange={handleCheckbox} />
                                        <label>{category.name}</label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='form_input_grp'>
                    <label>Price</label>
                    <input type={"text"} onChange={handleChange} name='amount' placeholder={"Enter a valid price for your product"} />
                </div>
                <div className='form_input_grp'>
                    <label>Brand Name</label>
                    <input type={"text"} onChange={handleChange} name='brand' placeholder={"Enter your brand name"} />
                </div>
                <div className='form_input_grp'>
                    <label>Number of products you have in your stock</label>
                    <input type={"text"} onChange={handleChange} name='stock' placeholder={"Quantity available"} />
                </div>
                <div className='form_input_grp'>
                    <label>Upload Product Images</label>
                    <input type="file" onChange={handleImage} name='image' accept="image/png, image/jpeg" alt='product-image' placeholder={"Enter your brand name"} />
                </div>
                <div className='form_input_grp'>
                    <button type="button" onClick={handleSubmit}>
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    )
}
