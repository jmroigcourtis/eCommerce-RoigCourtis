import { useContext, useState, useEffect } from "react";
import CartWidgetStyle from '../../CSS/style.css'
import { Cart2 } from "react-bootstrap-icons";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
    const {checkQuantity} = useContext(CartContext)

    return <>
            <div className="CartWidget">
                <Cart2 style={{color: 'white', height: '35px', width: '35px', margin: 0, padding: 0}}/>
                <span>{checkQuantity()}</span>
            </div>
            </>  
            
}

export default CartWidget;