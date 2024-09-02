import "../ShopexCards/style.scss";
import ShopexCard from "../ShopexCards/item/index.jsx";
import deliveryimg from "../../assets/images/deliveryimg.png";
import cashbackimg from "../../assets/images/cashback.png";
import premiumqualityimg from "../../assets/images/premiumqulity.png";
import callimg from "../../assets/images/call.png";
function ShopexCards(){
    return(
        <>
        <div className="ShopexCardsMainDiv">
            <ShopexCard src = {deliveryimg} />
            <ShopexCard src = {cashbackimg} />
            <ShopexCard src = {premiumqualityimg} />
            <ShopexCard src = {callimg} />
        </div>
        </>
    )
}
export default ShopexCards;