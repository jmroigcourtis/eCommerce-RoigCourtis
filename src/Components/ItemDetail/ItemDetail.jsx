import { Button, Card } from 'react-bootstrap'
import Iterate from '../Iterate/Iterate'
import ItemDetailStyle from './ItemDetail.css'
import { TagsFill, Truck } from 'react-bootstrap-icons'

const ItemDetail = ({detalle}) => {
    return (
        <>
        <div class="container">
            <div class="Item">
                        <img className='shadow imgAlign' src={detalle.pictureURL} alt={detalle.title} style={{width: "425px", height: "425px"}}></img>
                        <h6 className='text-center productDescription'>{detalle.description}</h6>

            </div>
            <div class="Itembuy shadow">
                <div class="ItembuyTitle shadow">
                    <p className='productTitle'>{detalle.title}</p>
                    </div>
                    <p className='productPrice'>${detalle.price}<TagsFill style={{color: 'rgb(245, 90, 90)', width: '30px', height: '30px'}}/></p>
                    <p className='productShip'><Truck style={{color: 'rgb(245, 90, 90)', width: '50px', height: '50px'}}/>Envios a todo el país!</p>
                    <p className='productStock'>Stock {detalle.stock}</p>
                <Iterate maxStock={5} minStock={0}/>
            </div>
        </div>
        </>
    )

}

export default ItemDetail