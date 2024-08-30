import "./style.scss"
import { Link } from "react-router-dom";
function Foot(props){
    return(
    
    <footer>
     <h1><Link to={"/"} >WebMaster</Link></h1>
      
      <div className="inp">
        <input type="text" placeholder="Enter Email Adress" name="" id="" /> <button>Sign Up</button>
      </div>
      <div className="info">
      <h3>Contact Info</h3>
      <h2>17 Princess Road, London, Greater London NW1 8JR, UK</h2>
      </div>
      <div className="Categories">
       <h2>Categories</h2>
       <p>Laptops & Computers</p>
       <p>Cameras & Photography</p>
       <p>Smart Phones & Tablets</p>
       <p>Video Games & Consoles</p>
       <p>Waterproof Headphones</p>
      </div>
      <div className="Customer-Care">
       <h2>Customer Care</h2>
       <p>My Account</p>
       <p>Discount</p>
       <p>Returns</p>
       <p>Orders History</p>
       <p>Order Tracking</p>
      </div>
      <div className="Pages">
       <h2>Pages</h2>
       <p>Blog</p>
       <p>Browse the Shop</p>
       <p>Category</p>
       <p>Pre-Built Pages</p>
       <p>Visual Composer Elements</p>
       <p>WooCommerce Pages</p>
      </div>
    </footer>
    
    );
}
export default Foot;