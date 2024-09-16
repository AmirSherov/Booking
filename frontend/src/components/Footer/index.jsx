import "./style.scss";
import { Link } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";

function Footer(props) {
  function clear() {
    const inp = document.getElementById('input');
    inp.value = ""
  }
  let marginTop = {
    "marginTop": props.title
  }
  return (
    <footer style={marginTop}>
     

      <h1><Link className="footerLogo" to={"/"} >Booking</Link></h1>

      <div className="inp">
        <input type="text" placeholder="Enter Email Adress" name="" id="input" /> <button onClick={clear} >Sign Up</button>
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
        <p><Link className="linksNav" to={"/"}><AiOutlineProduct />Products</Link></p>
        <p><Link className="linksNav" to={"contact"}><FcAbout />Contact</Link></p>
        <p><Link className="linksNav" to={"login"}><IoIosContact />Login</Link></p>
      </div>
      <div className="items">
        <div className="text">©Booking - All Rights Reserved</div>
      </div>
    </footer>

  );
}
export default Footer;