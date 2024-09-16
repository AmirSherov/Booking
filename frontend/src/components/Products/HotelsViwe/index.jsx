import "./style.scss"
import HotelRoomPhoto from "../../../assets/images/roomsPhoto.jpg"
import HotelPhoto from "../../../assets/images/photoOfHotel.jpg"
function HotelViwe(props) {
    return (
        <>
            <div className="ViweText">
                Hotel Viwe
            </div>
            <div className="HotelViweMainContainer">
                <div className="HotelProductsDiv">
                    <div className="photo">
                        <img src={HotelPhoto} alt="" />
                    </div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto, provident soluta a corrupti repudiandae, est eligendi blanditiis nihil necessitatibus sequi optio quidem deleniti alias eaque possimus neque ipsum inventore recusandae ea asperiores rerum! Veritatis, magni! Illum, vel consequatur quo quia ipsa, consectetur dolores vero nostrum adipisci accusamus officia dolorem velit fugiat qui tempora nam veritatis corrupti nulla, blanditiis aspernatur! Suscipit blanditiis labore dignissimos eius deleniti officia? Sapiente provident placeat, voluptatibus, veniam tenetur voluptatum sequi est assumenda ab velit quia adipisci autem ut ad, aliquam fugiat eaque molestiae reprehenderit esse at! Sunt doloremque quaerat cum illo reprehenderit molestiae animi voluptatem similique suscipit, veritatis cupiditate vel totam laudantium accusamus? Explicabo veniam similique natus quibusdam possimus sapiente quas totam voluptatum. Molestiae, libero?
                    </div>
                </div>
                <div className="HotelRoomDiv">
                    <div className="photo">
                        <img src={HotelRoomPhoto} alt="" />
                    </div>
                    <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto, provident soluta a corrupti repudiandae, est eligendi blanditiis nihil necessitatibus sequi optio quidem deleniti alias eaque possimus neque ipsum inventore recusandae ea asperiores rerum! Veritatis, magni! Illum, vel consequatur quo quia ipsa, consectetur dolores vero nostrum adipisci accusamus officia dolorem velit fugiat qui tempora nam veritatis corrupti nulla, blanditiis aspernatur! Suscipit blanditiis labore dignissimos eius deleniti officia? Sapiente provident placeat, voluptatibus, veniam tenetur voluptatum sequi est assumenda ab velit quia adipisci autem ut ad, aliquam fugiat eaque molestiae reprehenderit esse at! Sunt doloremque quaerat cum illo reprehenderit molestiae animi voluptatem similique suscipit, veritatis cupiditate vel totam laudantium accusamus? Explicabo veniam similique natus quibusdam possimus sapiente quas totam voluptatum. Molestiae, libero?
                    </div>
                </div>
            </div>
        </>
    )
}
export default HotelViwe;