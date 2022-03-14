import { useState, useEffect } from "react";
import { getFetch } from "../../Components/Helper/getFetch";
import ItemList from '../../Components/ItemList/ItemList';


const ItemListContainer = () => {        
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)

        useEffect(()=> {
                getFetch 
                .then ((resp) => setProductos(resp))
                .finally(() => setLoading(false))
                
        }, [])        
        return ( 
        <>
                {loading ? <h1 className="d-flex justify-content-center loading animateLoading">Cargando...</h1> : 
                <div>
                        <ItemList productos = {productos}/>
                </div> }
        </>
        )
}

export default ItemListContainer