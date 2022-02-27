import { useState, useEffect } from "react";
import { getFetch } from "../Item/Item";
import  Card  from "react-bootstrap/Card";
import  Button  from "react-bootstrap/Button";
import Iterate from '../Iterate/Iterate'

const ItemListContainer = () => {

        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)

        useEffect(()=> {
                getFetch /* Simulación de llamada a una API */
                .then((respuesta) => {return respuesta})
                .then ((resp) => setProductos(resp))/* Asignar valor a producto a partir de useState */
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
                
        }, [] /* Array vacio para respetar el Lifecycle de los componentes. El [] vacio permite que la función se ejecute solo una vez */)
        console.log((productos))
        
        return ( 
        <>
                {loading ? <h1 className="d-flex justify-content-center loading">Cargando</h1> :  
                        <div>                      
                                <div className="d-flex justify-content-center">
                                        {productos.map((prods) => 
                                        <Card className="cards" key={prods.id} style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={prods.pictureURL} alt="Remera" />
                                                        <Card.Body>
                                                                <Card.Title>{prods.title}</Card.Title>
                                                                        <Card.Text>  
                                                                                Color: {prods.description}<br></br>
                                                                                Stock: {prods.stock}<br></br>
                                                                                Price: ${prods.price}
                                                                        </Card.Text>
                                                                        <Button id="addToCart" variant="primary">Agregar al carrito</Button>
                                                        </Card.Body>
                                        </Card>
                                                                )}
                                </div> 
                        <Iterate maxStock={5} initialValue={0}/>
                        </div>
                }
        </>
        )
}

export default ItemListContainer