import "./product.css";
import QuantityPicker from "./quantityPicker";
const Product = ()=>{
    return(
        <div className="product">
            <img src="https://images.emojiterra.com/google/android-11/512px/1f986.png" alt=""/>
            <h2>Title</h2>
            <label>Price: $100.00</label>
            <label>Total: $200.00</label>
            <QuantityPicker></QuantityPicker>
            <button className="btn btn-primary">Add</button>
            
        </div>
    );
}

export default Product;