import React from 'react'
import { removeToCart ,addToCart } from '../service/actions/actions'

import { useDispatch } from "react-redux";
function Home(props) {
    const dispatch = useDispatch();
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00 
                    </span>
                </div>
                <div className="btn-wrapper item btn-primary">
                    <button style={{"background":'blue'}}
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        // ()=>dispatch(addToCart({pice:1000,name:'i phone 11'}))
                        }>
                        Add To Cart</button>
                        <br />
                      
                    <button 
                    onClick={
                        ()=>dispatch(removeToCart())
                        }>
                        Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home