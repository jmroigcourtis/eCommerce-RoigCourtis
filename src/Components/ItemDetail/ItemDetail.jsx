import ItemDetailStyle from './ItemDetail.css'

const ItemDetail = ({detalle}) => {
    return (
        <div className="detalles shadow-sm fs-5">   
            {detalle.description}
        </div>
    )

}

export default ItemDetail