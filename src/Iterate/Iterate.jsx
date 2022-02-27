import { useState} from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
        if (n > props.initialValue) {
            setN(n - 1)
        } else {
            setN(n)
            SwalAlert.fire({
                icon: 'warning',
                title: <p>No es posible agregar {props.initialValue} unidades al carrito.</p>
            })
        }
    }
    
    return ( 
        <div className="d-flex justify-content-center">
            <button className="btn bg-none" onClick={Sumar}>Agregar al carrito</button>
            <label className="bg-white p-3 m-4">Items añadidos: {n}</label>
            <button className="btn bg-none" onClick={Restar}>Sacar del carrito</button>
        </div>
    )
}

export default Iterate