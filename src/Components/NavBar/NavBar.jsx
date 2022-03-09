import ShowUnits from "../../Components/CartWidget/CartWidget";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {Joystick} from 'react-bootstrap-icons'
import { Navigate, NavLink } from "react-router-dom";

const NavBar = () => {
        return <>
            <Navbar sticky="top"  bg="light" className="shadow-sm d-flex">
                <Container className="row">
                    <NavLink to='/inicio'>
                        <Navbar.Brand className="fs-4 ms-5">
                            <Joystick  style={{color: 'rgb(245, 90, 90)', height: '40px', width: '40px'}}/>
                            Geekland
                        </Navbar.Brand>
                    </NavLink>
                        <Nav className="me-auto">
                            <NavLink to='/inicio'><p className=" fs-5 NavP NavBox">Inicio</p></NavLink>
                            <Nav.Link href="#features"><p className="fs-5 NavP NavBox">Productos</p></Nav.Link>
                            <Nav.Link href="#pricing"><p className="fs-5  NavP NavBox" >Sucursales</p></Nav.Link>
                            <Nav.Link href="#pricing"><p className="fs-5  NavP NavBox" >Ingresá</p></Nav.Link>
                            <NavLink to='/*' element={<Navigate to='/' replace/>}><ShowUnits/></NavLink>
                        </Nav>
                </Container>
            </Navbar>
        </>
    }

export default NavBar;
