import { Button, Card } from 'react-bootstrap'
import Iterate from '../Iterate/Iterate'
import ItemDetailStyle from './ItemDetail.css'

const ItemDetail = ({detalle}) => {
    return (
        <>
        <div class="container">
            <div class="Item">
                        <h3 className='fs-2'>{detalle.title}</h3>
                        <img src={detalle.pictureURL} alt={detalle.title} style={{width: "350px", height: "350px"}}>
                        </img>
            </div>
            <div class="Itembuy shadow-sm">
                    <h2>{detalle.title}</h2>
                    <h4>Precio: {detalle.price}</h4>
                <Iterate maxStock={5} minStock={0}/>
            </div>
        </div>
        </>
    )

}

export default ItemDetail