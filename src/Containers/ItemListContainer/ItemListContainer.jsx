import { useState, useEffect } from "react";
import ItemList from '../../Components/ItemList/ItemList';
import {collection, getDocs, getFirestore, limit, query, where} from 'firebase/firestore'

const ItemListContainer = () => {        
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)
        useEffect(()=>{

                const db = getFirestore()
                        const queryCollection = collection(db, 'productos')
                        getDocs(queryCollection)
                        .then(res => setProductos( res.docs.map(item => ({ id: item.id, ...item.data()}))))
                        .catch(error => console.error(error))
                        .finally(()=>setLoading(false))
        },[])
        console.log(productos);
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