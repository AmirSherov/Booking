import "../item/style.scss";
function LeatestProductsItem(props){
    return(
        <>
        <div className="LeatestProductsCardsMain">
            <div className="LeatestProductsImg">
                <img width={props.width} src= {props.src} alt="" />
            </div>
            <h3>Comfort Handy Craft</h3>
            <h2>$42.00 <p>$65.00</p></h2>
        </div>
        </>
    )
}
export default LeatestProductsItem;