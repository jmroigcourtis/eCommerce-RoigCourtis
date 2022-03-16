import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer'
import './CSS/style.css';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import CheckOut from './Components/Cart/Cart';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom' /*Este componente envuelve a la app que quiero que tenga navegabilidad */
import { CartContextProvider } from './Context/CartContext';
function App() {
  return (
  <CartContextProvider value={{}}>

    <BrowserRouter>
      <div>
        <header>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/*' element={<Navigate to='/' replace/>}/>
            <Route path='/checkOut' element={<CheckOut/>}/>
          </Routes>
          <Footer/>
        </header>
      </div>
    </BrowserRouter> 
  </CartContextProvider>
  );
}

export default App;

