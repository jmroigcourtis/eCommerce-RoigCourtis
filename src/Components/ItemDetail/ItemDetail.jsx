import Iterate from '../Iterate/Iterate'
import ItemDetailStyle from './ItemDetail.css'
import { TagsFill, Truck, CartCheck } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const ItemDetail = ({detalle}) => {
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
                <Iterate maxStock={5} minStock={0}/>
                    <div className='checkOut'>
                        <Link to='/checkOut'><button className='checkOutBtn btn shadow'><CartCheck style={{width: '35px', height: '35px'}}/></button></Link>
                    </div>
            </div>
        </div>
        </>
    )

}

export default ItemDetail