import "./style.scss";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { useState } from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import { MdSaveAs } from "react-icons/md";

function Nav(props) {
    const [activeLink, setActiveLink] = useState('/')
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
                        <Link className={`navigationLink ${activeLink === "/" ? "active" : ""}`} onClick={() => setActiveClass('/')} to="/"> <AiOutlineProduct />Products</Link>
                        <Link className={`navigationLink ${activeLink === "/Contact" ? "active" : ""}`} onClick={() => setActiveClass('/Contact')} to="reserv"><MdSaveAs />Reservations</Link>
                        <Link className={`navigationLink ${activeLink === "/Login" ? "active" : ""}`} onClick={() => setActiveClass('/Login')} to="login" ><IoMdLogOut />Login</Link>
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