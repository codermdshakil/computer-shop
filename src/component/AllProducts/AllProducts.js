import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import RandomProduct from '../RandomProduct/RandomProduct';
import SelectedProducts from '../SelectedProducts/SelectedProducts';
import './AllProducts.css';


const AllProducts = () => {

    // using useState 
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=> {
        fetch('allproducts.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // warning massage 
        document.getElementById('warning').style.display="none";
        // selected product container 
        document.getElementById('selected-item').style.display="block";
        // random product container 
        document.getElementById('random-container').style.display="none";


    }

    const removeItem = (product) => {
        const remoteItem = [];
        setCart(remoteItem);

        // warning massage 
        document.getElementById('warning').style.display="block";
        // random product container 
        document.getElementById('random-container').style.display="none";
    }


    // get random product using function 
    const getRandomProduct = (min, max) => {
        let step1 = max - min + 1;
        let step2 = Math.random() + step1;
        let result = Math.floor(step2) + min;
        return result;
    }


    const [randomItem, setRandomItem] = useState([]);


    const randomProduct = (cart) => {
        const randomNumber = Math.random() * cart.length-1;
        const randomValue = Math.floor(randomNumber);
        let index = getRandomProduct(0, randomValue);
        cart = cart[index];
        setRandomItem(cart);
        document.getElementById('selected-item').style.display="none";
        document.getElementById('win').style.display="block";
        // random product container 
        document.getElementById('random-container').style.display="block";
    }
   
    return (
        <div>
            <h2 className='main-title' style={{textAlign:'center'}}>Welcome to <span className='title'>Computer Shop</span></h2>
            <div className="row">
                <div className="col-lg-9 col-md-8 col-12">
                    <div className="row">
                    <h3 className='semi-title text-center text-md-start'>All Products</h3>
                        {
                            products.map(product => <Product addToCart={addToCart} product={product} key={product.id}></Product>)
                        }
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-10 d-block m-auto m-md-0 order-first order-md-last">
                    <div className='show-products border'>
                        <h4 className='selectes-title'>Selected Products</h4>
                        <div>
                            <p id='warning'>Please Select Product!!</p>
                            <div id='selected-item'>
                                {
                                    cart.map(item => <SelectedProducts key={item.id} item={item}></SelectedProducts>)
                                }
                            </div>
                            <div id='random-container' >
                                <p id='win'>this is for you!! 😊</p>
                                <RandomProduct key={randomItem.id} product={randomItem}></RandomProduct>
                            </div>
                        </div>
                        <button className='chooseOne-btn' onClick={()=>randomProduct(cart)}>Choose 1 for me</button><br/>
                        <button className='chooseAgain-btn' onClick={() => removeItem(products)}>Choose Again</button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default AllProducts;