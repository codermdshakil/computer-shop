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
                            products.map(product => <Product product={product} key={product.id}></Product>)
                        }
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-10 order-first order-md-last">
                    <h2>Selected</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt id vel in sunt natus accusamus! Beatae, asperiores quod illum mollitia harum porro excepturi ea dolorum. Cumque, atque sit. Quisquam tempore nihil dolor enim eveniet, dolorem incidunt corporis debitis veritatis illo sequi. Nobis voluptas dolorum sunt earum repudiandae hic commodi incidunt labore, ullam officia accusantium, voluptatem iure? Aliquam obcaecati veritatis nemo officiis deleniti laborum quos doloremque fugit tempore corrupti ullam unde nihil a eius modi minus doloribus provident, autem ex repellat voluptates. Corporis quae, perferendis molestiae hic tenetur exercitationem placeat debitis? Adipisci atque cum mollitia repudiandae deleniti illum eligendi ex.</p>
                </div>
            </div>




        </div>
    );
};

export default AllProducts;