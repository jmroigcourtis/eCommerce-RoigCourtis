import { useState} from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ButtonStyle from '../Iterate/Iterate.css'

const SwalAlert = withReactContent(Swal)

const ItemCount = ({maxStock, minStock}) => {
    const [count, setCount] = useState(0)
    const Sumar = () => {
        if (count < maxStock) {
            setCount(count + 1)
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
        } else {
            setCount(count)
            SwalAlert.fire({
                icon: 'warning',
                title: <p>No es posible agregar {minStock} unidades al carrito.</p>
            })
        }
    }


    
    return ( 
        <div className="d-flex justify-content-center">
            <button className="btnCart btn bg-none" onClick={Sumar}><p className="btnP">Agregar al carrito</p></button>
            <p className="cartNumber text-center shadow">{count}</p>
            <button className="btnCart btn bg-none" onClick={Restar}><p className="btnP">Sacar del carrito</p></button>
        </div>
    )
}

export default ItemCount