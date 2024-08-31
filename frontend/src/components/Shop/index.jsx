import "./style.scss"
import Cards from "../cards/index.jsx"
import Heading from "../common/Heading"
import { FaCartShopping } from "react-icons/fa6";
import myImg from "../../assets/images/image 1174.png";
import Footer from "../Footer";
function Shop() {
    return (
        <>
            <Heading title="Shop" path="Shop">
            <FaCartShopping />
            </Heading>
                <div className="main">
                    <div className="right">
                        <h1>Ecommerce Acceories & Fashion item</h1>
                        <h4>About 9,620 results (0.62 seconds)</h4>
                    </div>
                    <div className="left">
                        <h3>Per Page:</h3><input type="text" name="" id="" />
                        <h3>Sort By:</h3> <input type="text" name="" id="" />
                        <h3>View:</h3> <input type="text" name="" id="" />
                    </div>
                </div>
   
               <div className="grid-cards">
                <Cards />
               </div>
               <img className="footer-img" src= {myImg} alt="" />
               <Footer title = {1200}/>
            </>
                )
}
                
export default Shop;