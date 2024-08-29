import "./style.scss"
import Heading from "../common/Heading"
import { FaCartShopping } from "react-icons/fa6";
function Shop() {
    return (
        <>
            <Heading title="Shop" path="Shop"> 
            <FaCartShopping></FaCartShopping>
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


            </>
                )
}
                
export default Shop;