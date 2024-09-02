import "../item/style.scss";
function ShopexCard(props) {
    return (
        <>
            <div className="ShopexCardMain">
                <div className="ShopexImg">
                    <img src={props.src} alt="" />
                </div>
                <h2>24/7 Support</h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h4>
            </div>
        </>
    )
}
export default ShopexCard;