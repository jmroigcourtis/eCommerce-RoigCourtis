import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'


function Item({prods}) {

  return (
        <div className="d-flex justify-content-center">
            <Card className="cards" key={prods.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prods.pictureURL} alt="Remera" />
                        <Card.Body>
                            <Card.Title>{prods.title}</Card.Title>
                            <Card.Text>
                                Precio: ${prods.price}
                            </Card.Text>   
                            <NavLink to={`/item/${prods.description}`}>
                                <Button>Detalles</Button>
                                </NavLink>
                        </Card.Body>
            </Card>
        </div> 
    )
}

export default Item