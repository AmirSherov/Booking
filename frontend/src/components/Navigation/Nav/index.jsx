import "./style.scss";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { useState } from 'react';

function Nav(props) {
    const [language, setLanguage] = useState("English")
    const [money, setMoney] = useState("USD")
    const [activeLink , setActiveLink] = useState('/')

    function chngLanguage(e) {
        setLanguage(e.target.textContent)
    }
    function chngMoney(e) {
        setMoney(e.target.textContent)
    }
    function setActiveClass(path) {
        setActiveLink(path);

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
                        <Link className={`navigationLink ${activeLink === "/" ? "active" : ""}`} onClick={()=>setActiveClass('/')} to="/"> <FaHome />About Us</Link>
                        <Link className={`navigationLink ${activeLink === "/Contact" ? "active" : ""}`} onClick={()=>setActiveClass('/Contact')} to="#"><RiContactsFill />Contact</Link>
                        <Link className={`navigationLink ${activeLink === "/Login" ? "active" : ""}`} onClick={()=>setActiveClass('/Login')} to="#" ><IoMdLogOut />Login</Link>
                    </div>
                </div>
            </div>
            <div className="animation">
                <div className="lineVis">
                    <div className="line"></div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;