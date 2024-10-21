import { FaClock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "./style.scss";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { CiCircleInfo } from "react-icons/ci";

function ReservItem({ hotel, id, price, date, time }) {
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
                    <Link to={`/Reserv/${id}`}><CiCircleInfo />More</Link>
                </div>
            </div>
        
        </>
    );
}

export default ReservItem;
