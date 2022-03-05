import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


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
                            <Button variant="primary">Detalles</Button>
                        </Card.Body>
            </Card>
        </div> 
    )
}

export default Item