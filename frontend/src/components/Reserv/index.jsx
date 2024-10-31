import ReservationItem from './item.jsx';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

function Reserv(props) {
    const [reservs, setReservs] = useState([]);
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);
    const navigate = useNavigate();
    const [newReserv, setNewReserv] = useState({
        HotelName: "",
        Date: "",
        Price: 0,
        Time: ""
    });

    useEffect(() => {
        GetReservsFromDataBase();
    }, []);

    function setChangesToData(e) {
        const { name, value } = e.target;
         setNewReserv({ ...newReserv, [name]: value });
    }
    function SendDataToDataBase() {
        setModal1(true);
        fetch('https://backend1-o3bn.onrender.com/reservs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Добавьте этот заголовок
            },
            body: JSON.stringify(newReserv)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => {
            setNewReserv({
                HotelName: "",
                Date: "",
                Price: 0,
                Time: ""
            });
            setModal(false);
            setTimeout(() => {
                setModal1(false);
            }, 1000);
            toast.success('Successfully Added to DataBase!');
            setTimeout(() => {
                GetReservsFromDataBase();
            }, 2000);
            setTimeout(() => {
                navigate('/reservs');
            }, 3000);
        })
        .catch(error => {
            console.log('Failed to fetch reservs: ' + error.message);
            setModal1(false);  // остановка индикатора загрузки при ошибке
        });
    };

    function changeModal() {
        setModal(!modal);
    }

    function GetReservsFromDataBase() {
        fetch("https://backend1-o3bn.onrender.com/reservs")
            .then(response => response.json())
            .then(data => setReservs(data))
            .catch(error => console.log("Failed to fetch reservations: " + error.message));
    }

    return (
        <>
            <ToastContainer />
            <div className="addReserv">
                <div className="text">Add Reservation</div>
                <div onClick={changeModal} className="plus">+</div>
            </div>
            {modal &&
                <div className="modal-wrapper">
                    <div className="input-wrapper">
                        <label htmlFor="hotel">Hotel Name</label>
                        <input
                            placeholder='Hotel Name'
                            name='HotelName'
                            required
                            onChange={setChangesToData}
                            id='hotel'
                            type="text"
                        />
                        <label htmlFor="price">Price</label>
                        <input
                            placeholder='Price'
                            name='Price'
                            required
                            onChange={setChangesToData}
                            id='price'
                            type="number"
                        />
                        <label htmlFor="date">Choose a date</label>
                        <input
                            placeholder='Date'
                            name='Date'
                            required
                            onChange={setChangesToData}
                            id='date'
                            type="date"
                        />
                        <label htmlFor="time">Choose a time</label>
                        <input
                            placeholder='Time'
                            name='Time'
                            required
                            onChange={setChangesToData}
                            id='time'
                            type="time"
                        />
                        <button onClick={SendDataToDataBase}>Submit</button>
                    </div>
                </div>
            }
            <div className="reservs-wrapper">
                {
                    reservs.map((product, index) => (
                        <div key={index}>
                            <ReservationItem
                                id={product.id}
                                price={product.Price}
                                hotel={product.HotelName}
                                date={product.Date}
                                time={product.Time}
                            />
                        </div>
                    ))
                }
            </div>
            {modal1 &&
                <div className="loading">
                    <div className="lds-spinner">
                        <div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div>
                    </div>
                </div>
            }
        </>
    )
}

export default Reserv;
