import {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { CartXFill} from 'react-bootstrap-icons'

const CheckOut = () => {
    const {cartList, clearCart, removeItem, totalPrice, checkQuantity} = useContext(CartContext)
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
    </div> 
    
    :  

    <div>
        {cartList.map((item) => {
        return (
            <>
                <div className='CartDetail d-flex'>
                    <div className='CartProduct'>
                        <div className='ProductImage'>
                            <img className='imgResize shadow' src={item.pictureURL}></img>
                        </div>
                    </div>

                            <div className='PriceDetail'>
                                <div className='ProductTitle'>
                                    <h2>{item.title}</h2>
                                </div>
                                <p className='ProductPrice'>$ {item.price}</p>
                                <div>
                                    <p className='ProductQuantity text-center shadow-sm'>Cantidad: {item.cantidad}</p>
                                </div>
                            </div>
                </div>
                        <CartXFill className='CartX' onClick={ () => removeItem( item.id ) }>Eliminar del carrito</CartXFill>
            </>
        )
        })}
                    <div className='d-flex justify-content-center'>
                        <p className='ProductsTotalPrice'>Total: ${totalPrice()}</p><br></br>
                    </div>
                <div className='d-flex justify-content-center'>
                    <button className='clearCartButton btn' onClick={clearCart}>
                        <p>Vaciar carrito</p>
                    </button>
                </div>
    </div>
    }

export default CheckOut