import "../BlueChair/style.scss";
import BlueChairImg from "../../assets/images/bluechair.png";
import FonOfBlueChair from "../../assets/images/fonofbluechair.png";
function BlueChair(){
    return(
        <>
        <div className="BlueChairMainDiv">
            <div className="BlueChairImg">
                <img src={BlueChairImg} alt="" />
            </div>
            <div className="BlueChairFon">
                <img src={FonOfBlueChair} alt="" />
            </div>
            <div className="BlueChairMainText">
            Unique Features Of leatest & Trending Poducts
            </div>
            <div className="BlueChairOptions">
                <div><span></span> All frames constructed with hardwood solids and laminates</div>
                <div><span></span>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</div>
                <div><span></span> Arms, backs and seats are structurally reinforced</div>
            </div>
            <button className="BlueChairAddCart"> Add To Cart</button>
            <div className="price">
                <p>B&B Italian Sofa</p>
                <p>$32.00</p>
            </div>
        </div>
        </>
    )
}
export default BlueChair;