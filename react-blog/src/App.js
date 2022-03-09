import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
// import TestButton from "./test/TestButton";

function App() {
  return (
    <div className="App">
      <div className="wrapper-content">
        <Header />
        {/* <TestButton/> */}
        <HomePage />
        <div className="spacing"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
