import CardsGenerator from './Components/CardsGenerator';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="main--container">
      <NavBar />
      <CardsGenerator />
      <Footer />
    </div>
  );
}

export default App;
