import FeaturedCard from "../featuredCards/item";
import image13 from "../../assets/images/image13.png"
import image14 from "../../assets/images/image14.png"
import image15 from "../../assets/images/image15.png"
import image16 from "../../assets/images/image16.png"
import "../featuredCards/style.scss";
function FeaturedCards(props) {
    return (
        <div className="FeaturedAllCards">
            <div> <FeaturedCard width={200} title="Cantilever chair" src={image13} /></div>
            <div> <FeaturedCard width={150} title="Cantilever chair" src={image14} /></div>
            <div> <FeaturedCard width={200} title="Cantilever chair" src={image15} /></div>
            <div> <FeaturedCard width = {250} title="Cantilever chair" src={image16} /></div>
        </div>
    )
}
export default FeaturedCards;