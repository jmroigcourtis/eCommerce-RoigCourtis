import { useState, useEffect } from "react"
import { getFetch } from "../../Components/Helper/getFetch"
import ItemDetail from "../../Components/ItemDetail/ItemDetail"
import { productos } from "../../Components/Helper/getFetch"

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState([])

    useEffect(()=>{
        setTimeout(()=>{
            getFetch
            .then((res) => {return res}) /*MUY IMPORTNTE PONER EL RETURN SINO SE ROMPE TODO */
            .then((res) => setDetalle(res[0]))
            .catch((e) => console.error(e))
        }, 3000)
    }, [])
    return (
        <div>
            <ItemDetail detalle={detalle}/>
        </div>
    )
}



export default ItemDetailContainer