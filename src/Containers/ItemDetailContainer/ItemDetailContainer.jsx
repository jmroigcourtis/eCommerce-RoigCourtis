import { useState, useEffect } from "react"
import { getFetch } from "../../Components/Helper/getFetch"
import ItemDetail from "../../Components/ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [detalles, setDetalles] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            getFetch
            .then((res) => {return res}) /*MUY IMPORTNTE PONER EL RETURN SINO SE ROMPE TODO */
            .then((res) => setDetalles(res))
            .catch((e) => console.error(e))
            .finally(() => setLoading(false))
        }, 3000)
    }, [])
    return (
        <div>
            <ItemDetail detalles={detalles}/>
        </div>
    )
}



export default ItemDetailContainer