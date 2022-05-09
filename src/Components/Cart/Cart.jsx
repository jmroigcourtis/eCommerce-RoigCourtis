import {useContext, useEffect, useState} from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { X, BagCheck } from 'react-bootstrap-icons'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

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
    const {cartList, clearCart, removeItem, totalPrice, addProductQuantity, removeProductQuantity} = useContext(CartContext)
    const [orderId, setOrderId] = useState([])
    const [dataForm, setDataForm] = useState({
        email: '',
        checkEmail: '',
        name: '',
        phone: ''
    })

    useEffect(()=>{
    }, [orderId])

    const consumerData = 
    {buyer: 
        {
        name: dataForm.name, 
        phone:dataForm.phone, 
        email: dataForm.email
        }
    }

    const MySwal = withReactContent(Swal)

    const getOrderData = async (e) => {
        e.preventDefault();
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
        .then(res => setOrderId(res.id))
        .catch(e => console.error(e))
        .finally(()=> dataForm.email === dataForm.checkEmail ? MySwal.fire({
            title: 'Orden realizada!',
            icon: 'success'
        }) :  
        MySwal.fire({
            title: 'Los emails no coinciden',
            text: `Por favor, revisa que ambos emails sean identicos.`,
            icon: 'error'
        }) )
    }

    const handleChange = (e) => {
        setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value
      })
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


    <div className='showUpCart d-flex row'>
        <h2 className='orderTitle text-center'>Mi orden</h2>
        {cartList.map((item) => {
        return (
            <>
                <div className='CartDetail d-flex shadow-sm row'>
                    <div className='CartProduct'>
                        <div className='ProductImage'>
                            <img className='imgResize shadow-sm' src={item.image} alt='Imagen'></img>
                        </div>
                    </div>

                            <div className='PriceDetail d-flex col'>
                                <div className='ProductTitle'>
                                    <h2>{item.title}</h2>
                                </div>
                                <p className='ProductQuantity text-center shadow-sm'><button className='btn productButton' onClick={()=>removeProductQuantity(item.id)}>-</button>{item.cantidad}<button className='btn productButton' onClick={()=>addProductQuantity(item.id)}>+</button></p>
                                <p className='ProductPrice'>$ {item.price}</p>
                                <X className='CartX' onClick={ () => removeItem( item.id ) }/>
                            </div>
                </div>
                

            </>                        
        )
    })}
                            <div className='formStyle'>

                                <Card className='orderFormStyle shadow-sm col'>
                                    <BagCheck className='bagCheck'/>
                                    <Form onSubmit={getOrderData} >
                                            <Form.Group id="name">
                                                <Form.Label>Nombre</Form.Label> 
                                                <Form.Control
                                                    type='text' 
                                                    name='name' 
                                                    placeholder='name' 
                                                    value={dataForm.name}
                                                    onChange={handleChange}
                                                    />
                                            </Form.Group>
                        
                                            <Form.Group id="phone">
                                                <Form.Label>Teléfono</Form.Label> 
                                                <Form.Control 
                                                    type='text' 
                                                    name='phone'
                                                    placeholder='tel' 
                                                    value={dataForm.phone}
                                                    onChange={handleChange}
                                                    />
                                            </Form.Group>
                        
                                            <Form.Group id="email">
                        
                                            <Form.Label>Email</Form.Label> 
                                            <Form.Control 
                                                type='email' 
                                                name='email'
                                                placeholder='email' 
                                                value={dataForm.email}
                                                onChange={handleChange}
                                                required
                                                />
                                            <Form.Label>Repetir email</Form.Label> 
                                            <Form.Control 
                                                type='email' 
                                                name='checkEmail'
                                                placeholder='repetir email' 
                                                value={dataForm.checkEmail}
                                                onChange={handleChange}
                                                required
                                                />
                                            </Form.Group>
                                            {orderId.length !== '' && <p className='text-center m-2'>ID: {orderId}</p>}                                            
                                            <button className='btn orderButton'>Terminar Compra</button>
                                            <button className='clearCartButton btn' onClick={clearCart}>
                                            <p>Vaciar carrito</p>
                                        </button>
                                    </Form>
                        
                                    </Card>
                            </div>
                    <div className='d-flex justify-content-center'>
                        <p className='ProductsTotalPrice'>Total: ${totalPrice()}</p><br></br>
                    </div>
        </div>
    }

export default CheckOut