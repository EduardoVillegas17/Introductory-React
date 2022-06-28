import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
      <h1>Welcome to Organica</h1>
      </header>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}
// this is a comment
export default App;
