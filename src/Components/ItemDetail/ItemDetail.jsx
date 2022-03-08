import ItemDetailStyle from './ItemDetail.css'

const ItemDetail = ({detalle}) => {
    return (
        <div className="detalles shadow-sm">  
            {detalle.description}
        </div>
    )

}

export default ItemDetail