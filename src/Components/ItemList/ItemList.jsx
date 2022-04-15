import Item from "../../Components/Item/Items"
import { useState } from "react"

const ItemList = ( {productos} ) => {
    const [search, setSearch] = useState('')
    return (
        <div style={{height: "50%"}}>
            <div className="d-flex justify-content-center mt-4">
               <input type={'text'} placeholder={'Ejemplo: Auriculares, Funkos'} onChange={(event) => setSearch(event.target.value)}></input>
            </div>
            <div className="d-flex flex-wrap justify-content-center itemBox">
                        {
                        productos.filter((prod) => {
                            if(search === '') {
                                return prod
                            } else if (prod.title.toLowerCase().includes(search.toLowerCase())) {
                                return search
                            } else if (prod.collectionId.toLowerCase().includes(search.toLowerCase())) {
                                return search
                            } else if (search.length <= 0) {
                                return alert("Oh no!")
                            }
                        })
                        .map((prod) => <Item key={prod.id} prod={prod}/> )
                        }
            </div> 
        </div>
    )
}

export default ItemList