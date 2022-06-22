import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
function App() {
  return (
    <div className="navbar">
      <Navbar></Navbar>
      <h1>Welcome to Organica</h1>
      <Footer></Footer>
    </div>
  );
}

export default App;
