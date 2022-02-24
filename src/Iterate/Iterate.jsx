import { useState } from "react";

const Iterate = () => {
    const [n, setN] = useState(0)

    const Sumar = () => {
        setN(n + 1)
    }

    const Restar = () => {
        setN(n - 1)
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