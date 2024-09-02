import "../../components/LeatestProductsCards/style.scss";
import LeatestProductsItems from "../LeatestProductsCards/item/index.jsx";
import image17 from "../../assets/images/image17.png";
import image18 from "../../assets/images/image18.png";
import image19 from "../../assets/images/image19.png";
import image20 from "../../assets/images/image20.png";
import image21 from "../../assets/images/image21.png";
import image22 from "../../assets/images/image16.png";
function LeatestProductsCards(){
    return(
        <>
        <div className="LeatestProductsDivGrid">
        <LeatestProductsItems width = {150} src = {image17} />
        <LeatestProductsItems width = {150} src = {image18} />
        <LeatestProductsItems width = {150} src = {image19} />
        <LeatestProductsItems width = {150} src = {image20} />
        <LeatestProductsItems width = {150} src = {image21} />
        <LeatestProductsItems width = {180} src = {image22} />
        </div>
        </>
    )
}
export default LeatestProductsCards;