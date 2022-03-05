import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer'
import './CSS/style.css';
import Title from './Components/SectionTitle/SectionTitle';

function App() {
  return (
    <div>
      <header>
      <NavBar/>
      <Title titulo={'Funkos'}/>
      <ItemListContainer/>
      <Footer/>
      </header>
    </div>
  );
}

export default App;

