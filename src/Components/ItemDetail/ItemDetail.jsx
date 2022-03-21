import { useState} from 'react'
import ItemCount from '../Iterate/ItemCount'
import ItemDetailStyle from './ItemDetail.css'
import { TagsFill, Truck, CartCheck } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({producto}) => {
    const [countItem, setCountItem] = useState()

    const {addToCart, cartList} = useContext(CartContext)
    const onAdd = (count) => {
        console.log(count)
        console.table(producto);
        setCountItem(count)
        addToCart({...producto, cantidad: count})
    }
    console.log(cartList);

    return (
        <>
        <div class="container">
            <div class="Item">
                        <img className='shadow imgAlign' src={producto.pictureURL} alt={producto.title} style={{width: "425px", height: "425px"}}></img>
            </div>
            <div class="Itembuy shadow">
                <div class="ItembuyTitle shadow">
                    <p className='productTitle'>{producto.title}</p>
                    </div>
                    <p className='productPrice'>${producto.price}<TagsFill style={{color: 'rgb(245, 90, 90)', width: '30px', height: '30px'}}/></p>
                    <p className='productShip'><Truck style={{color: 'rgb(245, 90, 90)', width: '50px', height: '50px'}}/>Envios a todo el país!</p>
                    <p className='productStock'>Stock {producto.stock}</p>
                    <p className='productDescription'>Descripción: {producto.description}</p>
                <ItemCount maxStock={5} minStock={0} onAdd={onAdd} />
            </div>
        </div>
        </>
    )

}

export default ItemDetail