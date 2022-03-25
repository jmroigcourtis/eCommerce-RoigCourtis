import { Cart2 } from "react-bootstrap-icons";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {

    const {checkQuantity} = useContext(CartContext)
    return  <div className="CartWidget">
                <p>Items: {checkQuantity}</p>
                <Cart2 style={{color: 'white', height: '35px', width: '35px'}}/>
            </div>
            
}

export default CartWidget;