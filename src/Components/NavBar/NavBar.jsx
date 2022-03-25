import ShowUnits from "../../Components/CartWidget/CartWidget";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {Joystick} from 'react-bootstrap-icons'
import { Navigate, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const NavBar = () => {
    const {cartList} = useContext(CartContext)
        return <>
            <Navbar sticky="top"  className="shadow NavBackground Nav d-flex">
                <Container className="row">
                    <NavLink to='/inicio'>
                        <Navbar.Brand className="ms-5 fs-3" style={{color: 'white'}}>
                            <Joystick  style={{height: '50px', width: '50px'}}/>Geekland
                            
                        </Navbar.Brand>
                    </NavLink>
                        <Nav className="me-auto">
                            <NavLink to='/inicio'><p className=" fs-5 NavP NavBox">Inicio</p></NavLink>
                            <NavLink to='/'><p className="fs-5 NavP NavBox">Productos</p></NavLink>
                            <NavLink to='/'><p className="fs-5  NavP NavBox" >Sucursales</p></NavLink>
                            <NavLink to='/'><p className="fs-5  NavP NavBox" >Ingresá</p></NavLink>
                            <NavLink to='/checkOut'>
                                {cartList.length <= 0 ? null : <ShowUnits/>}
                                </NavLink>
                        </Nav>
                </Container>
            </Navbar>
        </>
    }

export default NavBar;
