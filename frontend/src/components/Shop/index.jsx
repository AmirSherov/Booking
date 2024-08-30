import "./style.scss"
import Cards from "../cards/index.jsx"
import Heading from "../common/Heading"
import { FaCartShopping } from "react-icons/fa6";
import myImg from "../../assets/images/image 1174.png"
import photo1 from "../../assets/images/photo1.jpg"
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
               <Cards src = {"../../assets/images/photo1.jpg"} title = "Jonathan adler chair">
               $26.00 $42.00
               </Cards>
               <Cards src = {"../../assets/images/makiz.jpg"} title = "Jonathan adler chair">
               $26.00 $42.00
               </Cards><Cards src = {"../../assets/images/makiz.jpg"} title = "Jonathan adler chair">
               $26.00 $42.00
               </Cards>
               <Cards src = {"../../assets/images/makiz.jpg"} title = "Jonathan adler chair">
               $26.00 $42.00
               </Cards>
               <Cards src = {"../../assets/images/makiz.jpg"} title = "Jonathan adler chair">
               $26.00 $42.00
               </Cards>
               <Cards src = {"../../assets/images/makiz.jpg"} title = "Jonathan adler chair">
               $26.00 $42.00
               </Cards>
               <Cards src = {"../../assets/images/makiz.jpg"} title = "Jonathan adler chair">
               $26.00 $42.00
               </Cards>
               <Cards src = {"../../assets/images/makiz.jpg"} title = "Jonathan adler chair">
               $26.00 $42.00
               </Cards>
               <Cards src = {"../../assets/images/makiz.jpg"} title = "Jonathan adler chair">
               $26.00 $42.00
               </Cards>
               <Cards src = {"../../assets/images/makiz.jpg"} title = "Jonathan adler chair">
               $26.00 $42.00
               </Cards>
               <Cards src = {"../../assets/images/makiz.jpg"} title = "Jonathan adler chair">
               $26.00 $42.00
               </Cards>
               <Cards src = {"../../assets/images/makiz.jpg"} title = "Jonathan adler chair">
               $26.00 $42.00
               </Cards>
               </div>
               <img src= {myImg} alt="" />
            </>
                )
}
                
export default Shop;