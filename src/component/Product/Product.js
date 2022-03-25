import React from 'react';

const Product = ({product}) => {

    const {img, name, price } = product;
    console.log(img, name, price); 

    return (
        <div>
            <div className='product-box'>
                
            </div>
        </div>
    );
};

export default Product;