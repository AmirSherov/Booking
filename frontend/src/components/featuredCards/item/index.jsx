import "../item/style.scss";
import "../item/style.scss";
function featuredCardItem(props){
    return(
        <>
        <div className="featured-cards-div">
            <div className="featured-cards-img">
                <img width={props.width} src={props.src} alt="" />
            </div>
            <div className="featured-cards-main-text">{props.title}</div>
            <div className="featured-cards-circles">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h3 className="featured-cards-code">Code - Y523201</h3>
            <p className="featured-cards-price">
            $42.00
            </p>
        </div>
        </>
    )
}
export default featuredCardItem;