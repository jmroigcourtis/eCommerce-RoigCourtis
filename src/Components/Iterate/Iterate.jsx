import { useState} from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ButtonStyle from '../Iterate/Iterate.css'

const SwalAlert = withReactContent(Swal)

const Iterate = (props) => {
    const [n, setN] = useState(0)
    const Sumar = () => {
        if (n < props.maxStock) {
            setN(n + 1)
        } else if (n === props.maxStock) {
            setN(n)
                SwalAlert.fire({
                    icon: 'warning',
                    title: <p>Alcanzaste el máximo de unidades permitidas ({props.maxStock}) para agregar al carrito</p>
                })
        }
    } 


    const Restar = () => {
        if (n > props.minStock) {
            setN(n - 1)
        } else {
            setN(n)
            SwalAlert.fire({
                icon: 'warning',
                title: <p>No es posible agregar {props.minStock} unidades al carrito.</p>
            })
        }
    }
    
    return ( 
        <div className="d-flex justify-content-center">
            <button className="btnCart btn bg-none" onClick={Sumar}><p className="btnP">Agregar al carrito</p></button>
            <p className="cartNumber text-center shadow">{n}</p>
            <button className="btnCart btn bg-none" onClick={Restar}><p className="btnP">Sacar del carrito</p></button>
        </div>
    )
}

export default Iterate