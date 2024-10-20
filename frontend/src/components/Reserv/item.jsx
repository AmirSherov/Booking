import { FaClock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "./style.scss";
import { useEffect, useState } from "react";
import axios from 'axios';

function ReservItem({ hotel, id, price, date, time }) {
    const [existingReservs, setExistingReservs] = useState([]);

    useEffect(() => {
        GetReservsFromDataBase();
    }, []);

    const GetReservsFromDataBase = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/Reservs");
            setExistingReservs(data);
        } catch (error) {
            toast.error('Failed to fetch reservations: ' + error.message);
        }
    };

    const deleteReservFromDataBase = async (reservId) => {
        try {
            await axios.delete(`http://localhost:3000/Reservs/${reservId}`);
            toast.success('Reservation deleted successfully!');
            setTimeout(() => {
                window.location.reload()
            }, 5400)
            setExistingReservs(existingReservs.filter(reserv => reserv.id !== reservId));
        } catch (error) {
            toast.error('Failed to delete reservation: ' + error.message);
        }
    };

    const checkAndDeleteReserv = () => {
        const existingReserv = existingReservs.find(reserv => reserv.HotelName === hotel);
        if (!existingReserv) {
            toast.error('Reservation not found.');
            return;
        }

        const confirmDelete = window.confirm('Do you really want to delete this reservation?');
        if (confirmDelete) {
            deleteReservFromDataBase(id);
        } else {
            toast.info('Reservation not deleted.');
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="reserv-wrapper">
                <div className="leftSide">
                    <div className="hotel">{hotel}</div>
                    <div className="id">ID: {id}</div>
                    <div className="price"><span>Price: $</span>{price}.00</div>
                </div>
                <div className="rightSide">
                    <div className="date">{date}</div>
                    <div className="time">{time}</div>
                    <div className="icon"><FaClock /></div>
                    <button onClick={checkAndDeleteReserv}>Delete</button>
                </div>
            </div>
        </>
    );
}

export default ReservItem;
