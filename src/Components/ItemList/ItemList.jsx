import Item from "../../Components/Item/Items"
// import Iterate from "../../Components/Iterate/Iterate"

const ItemList = ( {productos}) => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                    {productos.map((prods) => <Item key={prods.id} prods={prods}/> )}
            </div> 
        </div>
    )
}

export default ItemList