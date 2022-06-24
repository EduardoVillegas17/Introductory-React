import "./catalog.css";
import Product from "./product";

function Catalog(){
    return(
        <div className="catalog">
            <h2>This is Amazing Catalog!!!</h2>
            <h3>We have # products!!!</h3>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>

        </div>
    );
}

export default Catalog;

