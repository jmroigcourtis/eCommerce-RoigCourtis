import Item from "../../Components/Item/Items"
import {memo} from 'react'

/* const ItemList = memo => {
    ( {productos} ) => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                    {productos.map((prod) => <Item key={prod.id} prod={prod}/> )}
            </div> 
        </div>
    )
}
}) La callback es el componente */

const ItemList = ( {productos} ) => {
    return (
        <div>
            <div className="d-flex flex-wrap justify-content-center">
                    {productos.map((prod) => <Item key={prod.id} prod={prod}/> )}
            </div> 
        </div>
    )
}

export default ItemList