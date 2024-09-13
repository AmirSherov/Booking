import "./style.scss";
import { FaInfo } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { useState } from 'react';

function Nav(props) {
    const [language , setLanguage] = useState("English")
    const [money , setMoney] = useState("USD")

function chngLanguage(e){
    setLanguage(e.target.textContent)
}
function chngMoney(e){
    setMoney(e.target.textContent)
}

    return (
        <nav>
            <div className="bottom">
                <div className="left">
                    <Link to={"/"}>
                        <h1 className="logo">Booking</h1>
                    </Link>
                </div>
                <div className="right">
                    <div className="links">
                        <Link to="/"> <FaHome/>Home</Link>
                        <Link to="#"><FaInfo/>About Us</Link>
                        <Link to="#"><RiContactsFill/>Contact</Link>
                        <Link to = "#" ><IoMdLogOut/>Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;