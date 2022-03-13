import Item from "../../Components/Item/Items"

const ItemList = ( {productos}) => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                    {productos.map((prod) => <Item key={prod.id} prod={prod}/> )}
            </div> 
        </div>
    )
}

export default ItemList