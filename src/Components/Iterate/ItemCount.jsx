import { useState, useContext} from "react";
import { CartContext } from "../../Context/CartContext.jsx";
import { Link } from "react-router-dom";
import { CartCheck } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ItemCountStyle from '../../CSS/style.css'

const SwalAlert = withReactContent(Swal)

const ItemCount = ({maxStock, minStock, onAdd}) => {
    const [count, setCount] = useState(0)
    const {addProductQuantity, removeProductQuantity} = useContext(CartContext)
    
    const addToCart = (e) => {
        onAdd(count)
        if (count <= 0) {
            e.preventDefault()
            SwalAlert.fire({
                icon: 'error',
                title: 'Epa!',
                text: 'Para continuar tenes que agregar al menos un producto'
            })
        } 
    }
    
    const Sumar = () => {
        if (count < maxStock) {
            setCount(count + 1)
            addProductQuantity()
        } else if (count === maxStock) {
            setCount(count)
                SwalAlert.fire({
                    icon: 'warning',
                    title: <p>Alcanzaste el máximo de unidades permitidas ({maxStock}) para agregar al carrito</p>
                })
        }
    } 
    const Restar = () => {
        if (count > minStock) {
            setCount(count - 1)
            removeProductQuantity()
        } else {
            setCount(count)
            SwalAlert.fire({
                icon: 'warning',
                title: <p>No es posible agregar {minStock} unidades al carrito.</p>
            })
        }
    }



    
    return ( 
        <>
        <div className="d-flex justify-content-center">
            <button className="btnCart btn bg-none" onClick={Restar}><p className="btnP">Sacar del carrito</p></button>            
            <p className="cartNumber text-center shadow">{count}</p>
            <button className="btnCart btn bg-none" onClick={Sumar}><p className="btnP">Agregar al carrito</p></button>
        </div>
        <div className="d-flex justify-content-center checkOutPage">
            <Link to='/checkOut'><button onClick={addToCart} className='checkOutBtn btn shadow'><CartCheck  style={{width: '35px', height: '35px'}} /></button></Link>
        </div>
        </>
    )
}

export default ItemCount