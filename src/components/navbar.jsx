//import "./navbar.css";

function Navbar(){
    return (
    <div className="navbar">
        <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Cart</a>
        </li>
      </ul>

    </div>
    );
}

export default Navbar;