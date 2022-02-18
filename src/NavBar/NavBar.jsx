import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return <nav id="Nav">
                <ul>
                    <li><a href="#"><p className="ButtonNav">Inicio</p></a></li>
                    <li><a href="#"><p className="ButtonNav">Productos</p></a></li>
                    <li><a href="#"><p className="ButtonNav">Sucursales</p></a></li>
                    <li><a href="#"><p className="ButtonNav">Contacto</p></a></li>
                    <li id="Prueba" className="ShopIcon">
                        <a href="#">
                            <CartWidget/>
                        </a>
                    </li>
                </ul>
            </nav>
}

export default Navbar;
