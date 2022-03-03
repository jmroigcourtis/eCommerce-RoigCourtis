import ShowUnits from "../../Components/CartWidget/CartWidget";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {Shop} from 'react-bootstrap-icons'

const NavBar = () => {
        return <>
            <Navbar sticky="top"  bg="light" variant="light" className="shadow-sm d-flex">
                <Container className="row">
                    <Navbar.Brand className="fs-4 ms-5">
                        <Shop  style={{color: 'rgb(245, 90, 90)', height: '40px', width: '40px'}}/>
                        Regalalo
                    </Navbar.Brand>
                        <Nav className="me-auto ms-5">
                            <Nav.Link href="#home"><p className=" fs-5 NavP NavBox">Inicio</p></Nav.Link>
                            <Nav.Link href="#features"><p className="fs-5 NavP NavBox">Productos</p></Nav.Link>
                            <Nav.Link href="#pricing"><p className="fs-5  NavP NavBox" >Sucursales</p></Nav.Link>
                            <Nav.Link href="#cart"><ShowUnits/></Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </>
    }

export default NavBar;
