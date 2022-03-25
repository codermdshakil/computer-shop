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
        document.getElementById('warning').style.display="none";
        document.getElementById('random-container').style.display="block";
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const remoteItem = (product) => {
        document.getElementById('warning').style.display="block";
        document.getElementById('random-container').style.display="none";
        const remoteItem = [];
        setCart(remoteItem);
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
        document.getElementById('selected-item').style.display='none';
        document.getElementById('warning').style.display="none";
        document.getElementById('random-container').style.display="block";
        document.getElementById('win').style.display="block";
    
        const randomNumber = Math.random() * cart.length-1;
        const randomValue = Math.floor(randomNumber);
        let index = getRandomProduct(0, randomValue);
        cart = cart[index];
        setRandomItem(cart);
    }
   
    return (
        <div>
            <h2 className='main-title' style={{textAlign:'center'}}>Welcome to <span className='title'>Computer Shop</span></h2>
            <div className="row">
                <div className="col-lg-9 col-md-8 col-12">
                    <div className="row">
                    <h3 className='semi-title text-center text-md-start'>Products Overview</h3>
                        {
                            products.map(product => <Product addToCart={addToCart} product={product} key={product.id}></Product>)
                        }
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-10 d-block m-auto m-md-0 order-first order-md-last">
                    <div className='show-products'>
                        <h4 className='selectes-title'>Selected Products</h4>
                        <div>
                            <p id='warning'>Please Select 4 Product!!</p>
                            <div id='selected-item'>
                                {
                                    cart.map(item => <SelectedProducts key={item.id} item={item}></SelectedProducts>)
                                }
                            </div>
                            <div id='random-container' >
                                <p id='win'>this is for you!!😊</p>
                                <RandomProduct key={randomItem.id} product={randomItem}></RandomProduct>
                            </div>
                        </div>
                        <button className='chooseOne-btn' onClick={()=>randomProduct(cart)}>Choose 1 for me</button><br/>
                        <button className='chooseAgain-btn' onClick={() => remoteItem(products)}>Choose Again</button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default AllProducts;