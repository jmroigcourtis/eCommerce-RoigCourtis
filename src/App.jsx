import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer'
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

