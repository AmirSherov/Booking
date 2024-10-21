// import "./style.scss";
// import { useParams } from "react-router";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import img1 from "../../assets/images/room1.jpg";
// import img2 from "../../assets/images/room2.jpeg";
// function ReservsDetails(props) {
//     const [reserv, setReserv] = useState({});
//     const { id } = useParams();
//     const [existingReservs, setExistingReservs] = useState([]);

//     useEffect(() => {
//         GetReservsFromDataBase();
//     }, []);

//     const GetReservsFromDataBase = async () => {
//         try {
//             const { data } = await axios.get("http://localhost:3000/Reservs");
//             setExistingReservs(data);
//         } catch (error) {
//             toast.error('Failed to fetch reservations: ' + error.message);
//         }
//     };

//     const deleteReservFromDataBase = async (reservId) => {
//         try {
//             await axios.delete(`http://localhost:3000/Reservs/${reservId}`);
//             toast.success('Reservation deleted successfully!');
//             setTimeout(() => {
//                 window.location.reload()
//             }, 5400)
//             setExistingReservs(existingReservs.filter(reserv => reserv.id !== reservId));
//         } catch (error) {
//             toast.error('Failed to delete reservation: ' + error.message);
//         }
//     };

//     const checkAndDeleteReserv = () => {
//         const existingReserv = existingReservs.find(reserv => reserv.HotelName === hotel);
//         if (!existingReserv) {
//             toast.error('Reservation not found.');
//             return;
//         }

//         const confirmDelete = window.confirm('Do you really want to delete this reservation?');
//         if (confirmDelete) {
//             deleteReservFromDataBase(id);
//         } else {
//             toast.info('Reservation not deleted.');
//         }
//     };
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(`http://localhost:3000/Reservs/${id}`);
//             const data = await response.json();
//             setReserv(data);
//         };
//         fetchData();
//     }, []);
//     if (!reserv) {
//         return "Lodaing ...";
//     }
//     const images = [img1, img2];
//     const Img = images[Math.floor(Math.random() * images.length)] || '';
//     return (
//         <>
//             <Link to={"/reservs"}>Go Back</Link>
//             <div className="ReservDetailsWrapper">
//                 <div className="ReservDetailsLeftSide">
//                     <div className="DetailsHotelName">
//                         {reserv.HotelName}
//                     </div>
//                     <div className="DetailsImg">
//                         <img src={Img} alt="" />
//                     </div>
//                     <div className="DetailsPrice">
//                         {reserv.Price}.00<span>$</span>
//                     </div>
//                 </div>
//                 <div className="ReservDetailsRightSide">
//                     <div className="DetailsDate">
//                         <span>Date: </span>{reserv.Date ? reserv.Date : 'Undefined'}
//                     </div>
//                     <div className="DetailsTime">
//                         <span>Time: </span>{reserv.Time}
//                     </div>
//                     <div className="DetailsId">
//                         <span>ID: </span>{reserv.id}
//                     </div>
//                     <div className="deleteBtn">
//                         <button onClick={checkAndDeleteReserv}>Delete</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default ReservsDetails

import "./style.scss";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/room1.jpg";
import img2 from "../../assets/images/room2.jpeg";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function ReservsDetails(props) {
    const { id } = useParams();
    const [reserv, setReserv] = useState(null);
    const [existingReservs, setExistingReservs] = useState([]);
    const [modal , setModal] = useState(false)
    const navigate  = useNavigate()

    useEffect(() => {
        fetchData();
    }, [id]); 

    const fetchData = async () => {
        setModal(true)
            setTimeout(()=>{setModal(false)},1000)
            const [reservResponse, reservsResponse] = await Promise.all([
                axios.get(`http://localhost:3000/Reservs/${id}`),
                axios.get("http://localhost:3000/Reservs")
            ]);
            setReserv(reservResponse.data);
            setExistingReservs(reservsResponse.data);
        
    };

    const deleteReservFromDataBase = async (reservId) => {
        try {
            await axios.delete(`http://localhost:3000/Reservs/${reservId}`);
            toast.success('Reservation deleted successfully!');
            setExistingReservs(existingReservs.filter(reserv => reserv.id !== reservId));
            setTimeout(()=>{navigate('/reservs')},3000)
        } catch (error) {
            toast.error('Failed to delete reservation: ' + error.message);
        }
    };

    const checkAndDeleteReserv = () => {
        const existingReserv = existingReservs.find(r => r.id === id);  
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

    if (!reserv) {
        return <p>Loading...</p>; 
    }

    const images = [img1, img2];
    const Img = images[Math.floor(Math.random() * images.length)] || '';

    return (
        <>
        <ToastContainer/>
            <div className="ReservDetailsWrapper">
            <Link className="go-back" to="/reservs">Go Back</Link>
                <div className="ReservDetailsLeftSide">
                    <div className="DetailsHotelName">{reserv.HotelName}</div>
                    <div className="DetailsImg">
                        <img src={Img} alt="Room" />
                    </div>
                    <div className="DetailsPrice">
                        {reserv.Price}.00<span>$</span>
                    </div>
                </div>
                <div className="ReservDetailsRightSide">
                    <div className="DetailsDate">
                        <span>Date: </span>{reserv.Date || 'Undefined'}
                    </div>
                    <div className="DetailsTime">
                        <span>Time: </span>{reserv.Time}
                    </div>
                    <div className="DetailsId">
                        <span>ID: </span>{reserv.id}
                    </div>
                    <div className="deleteBtn">
                        <button onClick={checkAndDeleteReserv}>Delete</button>
                    </div>
                </div>
            </div>
            {modal &&
            <div className="loading">
            <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>}
        </>
    );
}

export default ReservsDetails;
