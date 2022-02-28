import Item from "../../Components/Item/Items"
import Iterate from "../../Components/Iterate/Iterate"

const ItemList = ( {productos}) => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                    {productos.map((prods) => <Item key={prods.id} prods={prods}/> )}
            </div> 
            <Iterate maxStock={5} minStock={0}/>
        </div>
    )
}

export default ItemList