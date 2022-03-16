import { useState } from 'react'
import ItemCount from '../Iterate/ItemCount'
import ItemDetailStyle from './ItemDetail.css'
import { TagsFill, Truck, CartCheck } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
// import {useCartContext} from '../../Context/CartContext'

const ItemDetail = ({detalle}) => {
    // const [count, setCount] = useState(null)
    // const {addToCart} = useCartContext()

    // const onAdd = cant => {
    //     console.log(cant)
    //     setCount(cant)
    //     addToCart({...detalle, cantidad: cant})
    // }
    const [countItem, setCountItem] = useState()
    const onAdd = (count) => {
        console.log(count)
    }

    return (
        <>
        <div class="container">
            <div class="Item">
                        <img className='shadow imgAlign' src={detalle.pictureURL} alt={detalle.title} style={{width: "425px", height: "425px"}}></img>
            </div>
            <div class="Itembuy shadow">
                <div class="ItembuyTitle shadow">
                    <p className='productTitle'>{detalle.title}</p>
                    </div>
                    <p className='productPrice'>${detalle.price}<TagsFill style={{color: 'rgb(245, 90, 90)', width: '30px', height: '30px'}}/></p>
                    <p className='productShip'><Truck style={{color: 'rgb(245, 90, 90)', width: '50px', height: '50px'}}/>Envios a todo el país!</p>
                    <p className='productStock'>Stock {detalle.stock}</p>
                    <p className='productDescription'>Descripción: {detalle.description}</p>
                <ItemCount maxStock={5} minStock={0} onAdd={onAdd}/>
            </div>
        </div>
        </>
    )

}

export default ItemDetail