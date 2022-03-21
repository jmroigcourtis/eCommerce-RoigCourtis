import {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'

const CheckOut = () => {
    const {cartList, removeFromCart} = useContext(CartContext)
    console.log(cartList)
    return (
    <div>
        {cartList.map((item) => {
            return (
                <>
                    <ul key={item.id}>
                        <li>{item.title}</li>
                        <li>{item.description}</li>
                        <li>{item.price}</li>
                    </ul>
                    <div className='d-flex justify-content-center'>
                        <button className='btn' onClick={removeFromCart}>Eliminar carrito</button>
                    </div>
                </>
            )
        })}
    </div>)
}

export default CheckOut