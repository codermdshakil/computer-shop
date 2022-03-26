import React from 'react';
import './RandomProduct.css';


const RandomProduct = ({product}) => {

    // destructuring product  
    const {img, name} = product;
    return (
        <div >
            <div className='random-Product' >
            <div className='random-img-frame'>
               <img src={img} alt="" />
            </div>
            <div>
               <p>{name}</p>
            </div>
            </div>
         
        </div>
    );
};

export default RandomProduct;