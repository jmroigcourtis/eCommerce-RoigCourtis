import {useContext, useState, useEffect} from 'react'
import { CartContext } from '../../Context/CartContext'
import { CartX } from 'react-bootstrap-icons'

const CheckOut = () => {
    const {cartList, clearCart} = useContext(CartContext)
    

    return cartList.length === 0 ?  <h1 className='d-flex justify-content-center' style={{color: 'black'}}>Parece que aún no agregaste nada!</h1> :  
    <div>
        {cartList.map((item) => {
        return (
            <>
                <div className='CartDetail'>
                    <div className='CartProduct'>
                        <div className='ProductTitle'>
                            <h2>{item.title}</h2>
                        </div>
                        <div className='ProductImage'>
                            <img className='imgResize' src={item.pictureURL}></img>
                        </div>
                    </div>
                </div>
            </>
        )
        })}
                <div className='d-flex justify-content-center'>
                    <CartX style={{width: '70px', height: '70px'}} className='btn clearCartButton' onClick={clearCart}>Eliminar carrito</CartX>
                </div>
    </div>
    }

export default CheckOut