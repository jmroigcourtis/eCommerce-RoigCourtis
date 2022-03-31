import { useState, useEffect } from "react";
import ItemList from '../../Components/ItemList/ItemList';
import ItemListStyle from '../../CSS/style.css'
import {collection, getDocs, getFirestore, limit, query, where} from 'firebase/firestore'
import LoadingAnimation from "../../Components/Animations/Loading";


const ItemListContainer = () => {        
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)
        useEffect(()=>{

                const db = getFirestore()
                        const queryCollection = collection(db, 'productos')
                        const queryFilter = query(queryCollection, where('price', '>=', 1000), limit(4))
                        getDocs(queryFilter)
                        .then(res => setProductos( res.docs.map(item => ({ id: item.id, ...item.data()}))))
                        .catch(error => console.error(error))
                        .finally(()=>{
                                setTimeout(()=>{
                                        setLoading(false)
                                }, 2300)
                        })
        },[])
        console.log(productos)
        return ( 
        <>
                {loading ?  <LoadingAnimation  className='pacman'/>  : 
                <div>
                        <ItemList className='showUpItems' productos = {productos}/>
                </div> }
        </>
        )
}

export default ItemListContainer

{/* <h1 className="d-flex justify-content-center loading animateLoading">Cargando...</h1>  */}