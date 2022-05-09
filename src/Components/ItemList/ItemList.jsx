import Item from "../../Components/Item/Items"
import { Search } from "react-bootstrap-icons"
import { useState } from "react"

const ItemList = ( {products} ) => {
    const [search, setSearch] = useState('')
    return (
        <div style={{height: "50%"}}>
            <div className="d-flex justify-content-center mt-4">
               <input className="searchBar btn shadow" type={'text'} placeholder={'Ejemplo: Auriculares, Funkos'} onChange={(event) => setSearch(event.target.value)}></input><Search className="searchIcon"/>
            </div>
            <div className="d-flex flex-wrap justify-content-center itemBox">
                        {
                        products.filter((prod) => {
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