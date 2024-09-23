import "./style.scss"
function ProductsCardItem(props) {
let PaddingInfo = {
    "paddingTop":props.padding
}
    return (
        <>
            <div className="ProductsCardDiv">
                <div className="ProductsCardImg">
                    <img className="ProductsCardImgClass" style = {PaddingInfo} src={props.img} alt="" />
                </div>
                <div className="ProductsCardText">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis magni, molestiae dolores cumque quis unde iste recusandae inventore voluptatum ipsum.
                </div>
            </div>
        </>
    )
}
export default ProductsCardItem;