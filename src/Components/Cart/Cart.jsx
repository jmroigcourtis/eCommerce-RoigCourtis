import {useContext, useState, useEffect} from 'react'
import { CartContext } from '../../Context/CartContext'
import { Cart2 } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const CheckOut = () => {
    const {cartList, clearCart, removeItem, checkPrice} = useContext(CartContext)

    return cartList.length === 0 ? 
    <div>
        <div className='d-flex justify-content-center'>
            <div className='EmptyCartTitle'>
                <h1 style={{color: 'black'}}>Carrito vacio!</h1>
            </div>
        </div>
        <div className='d-flex justify-content-center Shopping'>
            <Link to={'/inicio'}>
                <button className='btn GoToShopButton'><p className='EmptyCartButtonText'>Ir a comprar</p></button>
            </Link>
        </div>
    </div> :  

    <div>
        {cartList.map((item) => {
        return (
            <>
                <div className='CartDetail d-flex'>
                    <div className='CartProduct'>
                        <div className='ProductTitle'>
                            <h2>{item.title}</h2>
                        </div>
                        <div className='ProductImage'>
                            <img className='imgResize' src={item.pictureURL}></img>
                        </div>
                            <div className='ProductQuantity'>
                                <p>Cantidad: {item.cantidad}</p>
                            </div>
                    </div>

                            <div className='PriceDetail'>
                                <p className='ProductPrice'>$ {item.price}</p>
                            </div>
                </div>
                        <button onClick={ () => removeItem( item.id ) }>Eliminar del carrito</button>
            </>
        )
        })}
                <div className='d-flex justify-content-center'>
                        <p>Total: {checkPrice}</p>
                    <button className='clearCartButton btn' onClick={clearCart}>
                        <p>Vaciar carrito</p>
                    </button>
                </div>
    </div>
    }

export default CheckOut