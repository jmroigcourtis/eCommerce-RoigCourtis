import React from 'react'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'
import Itemcss from '../Item/Items.css'


function Item({prod}) {
  return (
        <div className="d-flex justify-content-center showUpCard">
            <Card className="cards shadow" key={prod.id} style={{ width: '18rem' }}>
                <Card.Img className='imgtest' variant="top" src={prod.image} alt="Remera" />
                        <Card.Body>
                            <Card.Title>{prod.title}</Card.Title>
                            <NavLink to={`/item/${prod.id}`}>
                                <button className='btnDetail btn'>Detalles</button>
                                </NavLink>
                        </Card.Body>
            </Card>
        </div> 
    )
}

export default Item