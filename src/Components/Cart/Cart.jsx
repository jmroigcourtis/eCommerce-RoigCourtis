import {useContext, useState} from 'react'
import OrderAnimation from '../Animations/OrderComplete/Order'
import cartStyle from '../Cart/CartStyle.css'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { CartXFill} from 'react-bootstrap-icons'
import { consumerData } from '../Consumer/consumer'
import {
    addDoc, 
    collection, 
    documentId, 
    getDocs, 
    getFirestore, 
    query, 
    where, 
    writeBatch
} from 'firebase/firestore'


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import EmptyCartAnimation from '../Animations/EmptyCart/EmptyCartAnimation'


const CheckOut = () => {
    const {cartList, clearCart, removeItem, totalPrice} = useContext(CartContext)
    const [orderId, setOrderId] = useState([])
    const MySwal = withReactContent(Swal)

    

    const getOrderData = async () => {

        const db = getFirestore()        


        let order = {}
        order.buyer = consumerData
        order.total = totalPrice()
        order.items = cartList.map(product => {
            const id = product.id;
            const title = product.title
            const price = product.price
            const quantity = product.cantidad
            return {id, title, price, quantity}
        })
    
        const queryCollection =  collection(db, 'productos')
        const queryUpdateStock =  query(queryCollection, where(documentId(), 'in', cartList.map(product => product.id) ))
        const batch = writeBatch(db)
        await getDocs(queryUpdateStock)
        .then(
            res => res.docs.forEach(
            res => batch.update(
                res.ref, {stock: res.data().stock - cartList.find(product => product.id === res.id).cantidad
            })
        ))
        .catch(error => console.log(error))
        batch.commit()

        const queryOrderCollection = collection(db, 'orders')
        addDoc(queryOrderCollection, order)
        .then(res => console.log(res))
        .then(
            getDocs(queryOrderCollection)
            .then((snapshot) => {
                snapshot.size === 0 ? console.log('Nada')
                : 
                ((snapshot.docs.map((doc) =>  setOrderId(({id: doc.id, ...doc.data()})))))
            })
        )
        .catch(e => console.log(e))
    }
    
    return cartList.length === 0 ? 
    <div>
        <div className='d-flex justify-content-center'>
            <div className='EmptyCartTitle'>
            <EmptyCartAnimation/>
                <h1 className='text-center mb-5' style={{color: 'black'}}>Aún no hay productos en tu carrito!</h1>
            </div>
        </div>
        <div className='d-flex justify-content-center Shopping'>
            <Link to={'/inicio'}>
                <button className='btn GoToShopButton m-5'><p className='EmptyCartButtonText'>Ir a comprar</p></button>
            </Link>
        </div>
    </div> 
    
    :  

    <div className='showUpCart'>
        {cartList.map((item) => {
        return (
            <>
                <div className='CartDetail d-flex'>
                    <div className='CartProduct'>
                        <div className='ProductImage'>
                            <img className='imgResize shadow' src={item.image}></img>
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
                    <button className='checkoutCartButton btn' onClick={getOrderData}><p>Generar orden</p></button>
                </div>
    </div>
    }

export default CheckOut