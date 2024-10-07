import "./style.scss"
import HotelRoomPhoto from "../../../assets/images/roomsPhoto.jpg"
import HotelPhoto from "../../../assets/images/photoOfHotel.jpg"
import HotelViewItem from './item.jsx'
function HotelViwe(props) {
    return (
        <>
            <div className="ViweText">
                Hotel Viwe
            </div>
           <HotelViewItem img = {HotelPhoto}/>
           <HotelViewItem img = {HotelRoomPhoto} />
        </>
    )
}
export default HotelViwe;