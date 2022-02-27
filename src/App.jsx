import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Footer from './Footer/Footer'
import './CSS/style.css';

function App() {
  return (
    <div>
      <header>
      <NavBar/>
      <ItemListContainer/>
      <Footer/>
      </header>
    </div>
  );
}

export default App;

