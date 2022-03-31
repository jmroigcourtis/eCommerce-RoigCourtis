import { useState} from 'react'
import ItemCount from '../Iterate/ItemCount'
import ItemDetailStyle from '../../CSS/style.css'
import { TagsFill, Truck} from 'react-bootstrap-icons'
import { useContext} from 'react'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({producto}) => {
    const [countItem, setCountItem] = useState()

    
    
    const {addToCart} = useContext(CartContext)

    const onAdd = (count) => {
        setCountItem(count)
        addToCart({...producto,  cantidad: count})
    }
    return (
        <>
        <div class="container showUpItemDetail">
            <div class="Item">
                        <img className='shadow imgAlign' src={producto.image} alt={producto.title} style={{width: "425px", height: "425px"}}></img>
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