import React from 'react'
// import { useSelector} from "react-redux";


function Header(props){
    console.warn(props.data);
    // const items = useSelector(state => state.cardItems);
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count" style={{"background":'blue'}}>{props.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    )
}

export default Header