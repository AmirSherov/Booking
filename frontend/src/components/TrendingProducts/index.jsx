import "../TrendingProducts/style.scss";
import image22 from "../../assets/images/image22.png"
import image23 from "../../assets/images/image23.png"
import image24 from "../../assets/images/image24.png"
import image25 from "../../assets/images/image21.png"
import TrendingCard from "../TrendingProducts/item/index.jsx";

function TrendingCards(){
    return(
        <>
        <div className="TrendingCardsFlex">
        <TrendingCard src = {image22} />
        <TrendingCard src = {image23} />
        <TrendingCard src = {image24} />
        <TrendingCard width = {225} src = {image25} />
        </div>
        </>
    )
}
export default TrendingCards;