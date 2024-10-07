import "./style.scss";
import img1 from "../../../assets/images/securtyLogo1.png"
import img2 from "../../../assets/images/cookingLogo.png"
import img3 from "../../../assets/images/amazonLogo.png"
import ProductsCardItem from "../ProductsCards/item/index.jsx"
function ProductsCards(props) {
    return (
        <>
            <div className="ProductsCardsMainDiv">
                <span><ProductsCardItem img = {img1} /></span>
                <span><ProductsCardItem img = {img2} /></span>
                <span><ProductsCardItem padding = {40} img = {img3} /></span>
            </div>
        </>
    )
}
export default ProductsCards