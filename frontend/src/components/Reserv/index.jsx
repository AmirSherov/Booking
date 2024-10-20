import ReservationItem from './item.jsx'
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import './style.scss'
function Reserv(props) {
    const [reservs, setReservs] = useState([])
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)
    const navigate = useNavigate()
    const [newReserv, setNewReserv] = useState({
        HotelName: "",
        Date: "",
        Price: "",
        Time: '',
    })
    useEffect(() => {
        GetReservsFromDataBase()
    }, [])

    function setChangesToData(e) {
        const { name, value } = e.target
        setNewReserv({ ...newReserv, [name]: value })
    }

    function SendDataToDataBase() {
        setModal1(true)
        fetch('http://localhost:3000/Reservs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                ...newReserv, 
                id: Date.now().toString() 
            })
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
                    Price: "",
                    Time: ''
                });
                setModal(false);
                setTimeout(() => {
                    setModal1(false)
                }, 1000)
                toast.success('Successfully Added to DataBase!')
                setTimeout(() => {
                    GetReservsFromDataBase();
                    window.location.reload()
                }, 2000)

            })
            .catch(error => {
                console.log('Failed to fetch reservs' + error.message)
            });
    };
    function changeModal(e) {
        setModal(!modal)
    }
    function GetReservsFromDataBase() {
        fetch("http://localhost:3000/Reservs")
            .then(response => response.json())
            .then(data => {
                setReservs(data)
            })
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
                        <input placeholder='Hotel Name' name='HotelName' required onChange={setChangesToData} id='hotel' type="text" />
                        <label htmlFor="price">Price</label>
                        <input placeholder='Price' name='Price' required onChange={setChangesToData} id='price' type="number" />
                        <label htmlFor="date">Choose a date</label>
                        <input placeholder='Date' name='Date' required onChange={setChangesToData} id='date' type="date" />
                        <label htmlFor="time">Choose a time</label>
                        <input placeholder='Time' name='Time' required onChange={setChangesToData} id='time' type="time" />
                        <button onClick={SendDataToDataBase}>Submit</button>
                    </div>
                </div>
            }
            <div className="reservs-wrapper">
                <ReservationItem
                    id={1728233340976}
                    time={"23:00"}
                    price={15}
                    hotel={"San Tiego"}
                    date={"2004.09.09"}

                />
                {
                    reservs.map((product, index) => {
                        return (
                            <div key={index}>
                                <ReservationItem
                                    id={product.id}
                                    time={product.Time}
                                    price={product.Price}
                                    hotel={product.HotelName}
                                    date={product.Date}
                                />
                            </div>
                        )
                    })
                }
            </div>
            {modal1 &&
                <div className="loadingAnimation">
                    <div className="Alltriangle">
                        <div className="triangle1"></div>
                        <div className="triangle2"></div>
                        <div className="triangle3"></div>
                    </div>
                </div>}
        </>
    )
    //http://localhost:3000/Reservs
}
export default Reserv;
