import Item from "../Item/Items"
import Iterate from "../Iterate/Iterate"

const ItemList = ( {productos}) => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                    {productos.map((prods) => <Item key={prods.id} prods={prods}/> )}
            </div> 
            <Iterate/>
        </div>
    )
}

export default ItemList