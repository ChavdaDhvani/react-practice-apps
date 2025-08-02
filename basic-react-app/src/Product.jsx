import "./Product.css";
import Price from "./Price.jsx";

function Product({title, idx}){
    let oldPrice = ["12,495", "11,900", "1,599", "599"];
    let newPrice = ["8,999", "9,199", "899", "278"];
    let description = ['ABC', 'DEF', 'GHI', 'JKL'];
    
   
    return (
        <div className="Product" >
            <h4>{title}</h4>
           <p>{description[idx]}</p>
           <br></br>
           <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        
        </div>
    );
}

export default Product;