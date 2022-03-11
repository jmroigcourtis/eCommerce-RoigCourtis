import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'


function Item({prod}) {

  return (
        <div className="d-flex justify-content-center">
            <Card className="cards shadow" key={prod.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.pictureURL} alt="Remera" />
                        <Card.Body>
                            <Card.Title>{prod.title}</Card.Title>
                            <NavLink to={`/item/${prod.id}`}>
                                <Button>Detalles</Button>
                                </NavLink>
                        </Card.Body>
            </Card>
        </div> 
    )
}

export default Item