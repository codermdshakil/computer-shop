import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './AllProducts.css';


const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('allproducts.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    return (
        <div>
            <h2 className='main-title' style={{textAlign:'center'}}>Welcome to <span className='title'>Computer Shop</span></h2>
            <div className="row">
                <div className="col-lg-9 col-md-8 col-12">
                    <div className="row">
                    <h3 className='semi-title text-center text-md-start'>Products Overview</h3>
                        {
                            products.map(product => <Product  product={product} key={product.id}></Product>)
                        }
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-10 d-block m-auto m-md-0 order-first order-md-last">
                    <div className='show-products'>
                        <h4>Selectes Products</h4>
                        <div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, pariatur.</p>
                        </div>
                        <button className='chooseOne-btn'>Choose 1 for me</button><br/>
                        <button className='chooseAgain-btn'>Choose Again</button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default AllProducts;