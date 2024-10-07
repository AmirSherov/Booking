import './style.scss';
function HotelViewItem(props) {
    return (
        <>
            <div className="HotelViweMainContainer">
                <div className="HotelProductsDiv">
                    <div className="photo">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto, provident soluta a corrupti repudiandae, est eligendi blanditiis nihil necessitatibus sequi optio quidem deleniti alias eaque possimus neque ipsum inventore recusandae ea asperiores rerum! Veritatis, magni! Illum, vel consequatur quo quia ipsa, consectetur dolores vero nostrum adipisci accusamus officia dolorem velit fugiat qui tempora nam veritatis corrupti nulla, blanditiis aspernatur! Suscipit blanditiis labore dignissimos eius deleniti officia? Sapiente
                    </div>
                </div>
            </div>
        </>
    )
}
export default HotelViewItem