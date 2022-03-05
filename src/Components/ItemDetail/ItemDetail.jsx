

const ItemDetail = ({detalles}) => {
    return (
        <div>   
           {detalles.map(itemDetail => console.log(itemDetail.description))}
        </div>
    )

}

export default ItemDetail