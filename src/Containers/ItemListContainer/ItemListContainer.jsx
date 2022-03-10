import { useState, useEffect } from "react";
import { getFetch } from "../../Components/Helper/getFetch";
import ItemList from '../../Components/ItemList/ItemList';
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";


const ItemListContainer = () => {        
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)

        useEffect(()=> {
                getFetch /* Simulación de llamada a una API */
                .then ((resp) => setProductos(resp))/* Asignar valor a producto a partir de useState */
                .finally(() => setLoading(false))
                
        }, [] /* Array vacio para respetar el Lifecycle de los componentes. El [] vacio permite que la función se ejecute solo una vez */)        
        return ( 
        <>
                {loading ? <h1 className="d-flex justify-content-center loading">Cargando...</h1> : 
                <div>
                        <ItemList productos = {productos}/>
                </div> }
        </>
        )
}

export default ItemListContainer