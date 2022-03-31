import { doc, getDoc, getFirestore} from "firebase/firestore"
import {useEffect} from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../Components/ItemDetail/ItemDetail"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"


const ItemDetailContainer = () => {
    const {producto, setProducto} = useContext(CartContext)
    const {id} = useParams()

    useEffect(()=> {
        const getData = ( ) => {
            const db = getFirestore()
            const queryDb = doc(db, 'productos', id)
            getDoc(queryDb)
            .then(res => setProducto( {id: res.id, ...res.data()}))
            .catch(e => console.log(e))
        }
        getData()
    }, [])
    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}



export default ItemDetailContainer