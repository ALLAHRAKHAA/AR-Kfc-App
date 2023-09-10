import React, { useState } from 'react';
import Header from '../Components/Header';
import CartViewOffCanvas from '../Components/CartViewOffCanvas';
import Footer from '../Components/Footer';
import MenuPage from './MenuPage';
<CartViewOffCanvas />


export default function App1(){
    const [cartItems, setCartItems] = useState([]);

    // const [cartCounter, setCartCounter]=useState(0); no need of counter

    // const increment= () => {
    //         setCartCounter(cartCounter + 1);

    // }

    const addToCart =(item) => {
        // console.log(item);
        setCartItems([...cartItems, item ]);
    }
        return(
            <div style={{background: "rgb(11 129 141 / 91%)"}}>
            <CartViewOffCanvas  cartItems = {cartItems}/>
            <Header cartCounter={cartItems.length}/>
            <MenuPage addToCart={addToCart}/>
            <h1><Footer /></h1>

            </div>

        );

}