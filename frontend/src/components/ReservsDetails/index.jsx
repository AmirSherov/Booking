import "./style.scss";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import img1 from "../../assets/images/room1.jpg";
import img2 from "../../assets/images/room2.jpeg";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function ReservsDetails() {
    const { id } = useParams(); // Получаем ID из URL
    const [reserv, setReserv] = useState(null); // Состояние для хранения данных резерва
    const [modal, setModal] = useState(false); // Состояние для отображения загрузки
    const navigate = useNavigate(); // Хук для навигации

    useEffect(() => {
        fetchData(); // Получаем данные резерва при загрузке компонента
    }, [id]);

    const fetchData = async () => {
        setModal(true); // Показываем модалку загрузки
        try {
            // Ждем 500 мс перед запросом
            await new Promise(resolve => setTimeout(resolve, 500));
            const reservResponse = await axios.get(`https://backend1-o3bn.onrender.com/reservs/${id}`); // Запрос к API для получения резерва по ID
            setReserv(reservResponse.data); // Сохраняем данные резерва
        } catch (error) {
            toast.error('Failed to fetch reservation: ' + error.message); // Обработка ошибок
        } finally {
            setModal(false); // Скрываем модалку загрузки
        }
    };

    const deleteReservFromDataBase = async (reservId) => {
        try {
            await axios.delete(`https://backend1-o3bn.onrender.com/reservs/${reservId}`); // Запрос на удаление резерва по ID
            toast.success('Reservation deleted successfully!');
            navigate('/reservs'); // Перенаправляем пользователя на страницу резерваций
        } catch (error) {
            toast.error('Failed to delete reservation: ' + error.message);
        }
    };

    const checkAndDeleteReserv = () => {
        const confirmDelete = window.confirm('Do you really want to delete this reservation?');
        if (confirmDelete) {
            deleteReservFromDataBase(id); // Удаляем резерв, если пользователь подтвердил
        } else {
            toast.info('Reservation not deleted.');
        }
    };

    if (!reserv) {
        return <p>Loading...</p>; // Отображаем сообщение, пока данные загружаются
    }

    const images = [img1, img2];
    const Img = images[Math.floor(Math.random() * images.length)] || '';

    return (
        <>
            <ToastContainer />
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
                        <span>ID: </span>{id}
                    </div>
                    <div className="deleteBtn">
                        <button onClick={checkAndDeleteReserv}>Delete</button>
                    </div>
                </div>
            </div>
            {modal && (
                <div className="loading">
                    <div className="lds-spinner">
                        {[...Array(12)].map((_, index) => <div key={index}></div>)}
                    </div>
                </div>
            )}
        </>
    );
}

export default ReservsDetails;
