import { useState, useEffect } from "react";
import ItemList from '../../Components/ItemList/ItemList';
import ItemListStyle from '../../CSS/style.css'
import {collection, getDocs, getFirestore, limit, query, where} from 'firebase/firestore'
import LoadingAnimation from "../../Components/Animations/Loading";


const ItemListContainer = () => {        
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)
        const db = getFirestore()

        const getProds = (id) => {
                const queryCollection = collection(db, id)
                const queryFilter = query(queryCollection, where('price', '>', 1000))
                getDocs(queryFilter)
                .then(res => setProductos( res.docs.map(item => ({ id: item.id, ...item.data()}))))
                .catch(error => console.error(error))
                .finally(()=>{
                        setTimeout(()=>{
                                setLoading(false)
                        }, 1000)
                })
        }
        useEffect(()=>{
                getProds('productos')
        },[])
        return ( 
        <>
                {loading ?  <LoadingAnimation  className='pacman'/>  : <ItemList className='showUpItems' productos = {productos}/>}
        </>
        )
}

export default ItemListContainer

{/* <h1 className="d-flex justify-content-center loading animateLoading">Cargando...</h1>  */}