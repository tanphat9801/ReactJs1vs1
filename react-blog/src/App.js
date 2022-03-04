
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <div className="spacing"></div>
      <Footer/>
    </div>
  );
}

export default App;
