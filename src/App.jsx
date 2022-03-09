import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer'
import './CSS/style.css';
import Title from './Components/SectionTitle/SectionTitle';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom' /*Este componente envuelve a la app que quiero que tenga navegabilidad */


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:itemdescription' element={<ItemDetailContainer/>}/>
          <Route path='/*' element={<Navigate to='/' replace/>}/>
        </Routes>
          <Footer/>
        </header>
      </div>
    </BrowserRouter> 
  );
}

export default App;

