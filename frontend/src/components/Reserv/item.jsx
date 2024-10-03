import { SiAxios } from "react-icons/si";
import "./style.scss";
import { FaClock } from "react-icons/fa";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
function ReservItem(props) {
    return (
        <>
        <ToastContainer />
            <div className="reserv-wrapper">
                <div className="leftSide">
                    <div className="hotel">{props.hotel}</div>
                    <div className="id">ID:{props.id}</div>
                    <div className="price"> <span>Price :$ </span>{props.price}.00</div>
                </div>
                <div className="rightSide">
                    <div className="date">{props.date}</div>
                    <div className="time">{props.time}</div>
                    <div className="icon"><FaClock /></div>
                </div>
            </div>
        </>
    )
}
export default ReservItem;