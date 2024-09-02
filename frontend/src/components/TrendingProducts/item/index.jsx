import "../item/style.scss";

function TrendingCard(props){
    let width = {
        "width" : props.width
    }
    return(
        <>
        <div className="TrendingCardMainDiv">
            <div className="TrendingCardImg">
                <img style={width} src= {props.src} alt="" />
            </div>
            <h2>Cantilever chair</h2>
            <h3>$26.00 <span>$42.00</span></h3>
        </div>
        </>
    )
}
export default TrendingCard;