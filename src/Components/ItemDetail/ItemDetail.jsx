import { Button, Card } from 'react-bootstrap'
import Iterate from '../Iterate/Iterate'
import ItemDetailStyle from './ItemDetail.css'

const ItemDetail = ({detalle}) => {
    return (
        <>
        <div class="container">
            <div class="Item">
                        <img className='shadow imgAlign' src={detalle.pictureURL} alt={detalle.title} style={{width: "425px", height: "425px"}}></img>
                        <h6 className='text-center productDescription'>{detalle.description}</h6>

            </div>
            <div class="Itembuy shadow">
                    <p className='productTitle'>{detalle.title}</p>
                    <p className='productPrice'>${detalle.price}</p>
                    <p className='productStock'>{detalle.stock}</p>
                    <h6 className='productDescription'>{detalle.description}</h6>
                <Iterate maxStock={5} minStock={0}/>
            </div>
        </div>
        </>
    )

}

export default ItemDetail