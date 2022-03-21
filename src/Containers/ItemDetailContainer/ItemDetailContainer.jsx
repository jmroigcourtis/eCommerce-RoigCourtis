import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../../Components/Helper/getFetch"
import ItemDetail from "../../Components/ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const {id} = useParams()

    useEffect(()=>{
            getFetch
            .then((res) => setProducto(res.find((item) => item.id === id)))
            .catch((e) => console.error(e))
        }, [id])
    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}



export default ItemDetailContainer