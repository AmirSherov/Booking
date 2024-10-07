import { FaClock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "./style.scss";
import { useEffect, useState } from "react";

function ReservItem(props) {
    const [existingReservs, setExistingReservs] = useState([]);

    useEffect(() => {
        GetReservsFromDataBase();
    }, []);

    const deleteReservFromDataBase = async (reservId) => {
        try {
            const response = await fetch(`http://localhost:3000/Reservs/${reservId}`, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            toast.success('Reservation deleted successfully!');
            setTimeout(()=>{
                window.location.reload()
            },5200)
            await GetReservsFromDataBase(); 
        } catch (error) {
            toast.error('Failed to delete reservation: ' + error.message);
        }
    };
    


    const checkAndDeleteReserv = async () => {
        try {
            await GetReservsFromDataBase();
    
            const existingReserv = existingReservs.find(reserv => reserv.HotelName === props.hotel);
    
            if (existingReserv) {
                const confirmDelete = window.confirm('Do you really want to delete this reservation?');
                if (confirmDelete) {
                    console.log("Attempting to delete reservation with ID:", existingReserv.id);
                    await deleteReservFromDataBase(existingReserv.id);
                } else {
                    toast.info('Reservation not deleted.');
                }
            } else {
                toast.error('Reservation not found.');
            }
        } catch (error) {
            toast.error('Failed to check reservations: ' + error.message);
        }
    };
    

    const GetReservsFromDataBase = async () => {
        try {
            const response = await fetch("http://localhost:3000/Reservs");
            if (!response.ok) {
                throw new Error('Failed to fetch reservations');
            }
            const data = await response.json();
            setExistingReservs(data);
        } catch (error) {
            toast.error('Failed to fetch reservations: ' + error.message);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="reserv-wrapper">
                <div className="leftSide">
                    <div className="hotel">{props.hotel}</div>
                    <div className="id">ID: {props.id}</div>
                    <div className="price"><span>Price: $</span>{props.price}.00</div>
                </div>
                <div className="rightSide">
                    <div className="date">{props.date}</div>
                    <div className="time">{props.time}</div>
                    <div className="icon"><FaClock /></div>
                    <button onClick={checkAndDeleteReserv}>Delete</button>
                </div>
            </div>
        </>
    );
}

export default ReservItem;
