import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../../Components/Helper/getFetch"
import ItemDetail from "../../Components/ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState([])
    const {itemdescription} = useParams()

    useEffect(()=>{
            getFetch
            .then((res) => setDetalle(res.find((item) => item.description === itemdescription)))
            .catch((e) => console.error(e))
    }, [itemdescription])
    return (
        <div>
            <ItemDetail detalle={detalle}/>
        </div>
    )
}



export default ItemDetailContainer