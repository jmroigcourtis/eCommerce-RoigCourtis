import { useContext, useState, useEffect } from "react";
import { Cart2 } from "react-bootstrap-icons";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
    const {checkQuantity} = useContext(CartContext)

    return <>
            <div className="CartWidget">
                <Cart2 style={{color: 'white', height: '35px', width: '35px'}}/>
            </div>
                <p className="cartQuantity text-center">{checkQuantity()}</p>
            </>  
            
}

export default CartWidget;