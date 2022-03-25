import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = ({product}) => {

    const {img, name, price } = product;
    console.log(img, name, price); 

    return (
        <div className='col-lg-4 col-md-6 col-10 d-block m-auto m-md-0'>
            <div className='single-product border'>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <p>Price: ${price}</p>
                <div>
                    <button>Add To Cart <FontAwesomeIcon icon={faCartShopping}/></button>
                </div>
            </div>
        </div>
    );
};

export default Product;

