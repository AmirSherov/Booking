import "./style.scss";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { useState } from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import { MdSaveAs } from "react-icons/md";
import { context } from "../../../../store"
import { useContext, useEffect } from 'react'

function Nav(props) {
    const [activeLink, setActiveLink] = useState('/')
    const { state, dispatch } = useContext(context)
    const [log, setLog] = useState(false)
    function setActiveClass(path) {
        setActiveLink(path);
    }
    useEffect(() => {
        function logOutCheck() {
            if (state.navEmailAddres !== '') {
                setLog(!log)
                console.log('out')
            } else {
                setLog(log)
            }
        }
        logOutCheck()
    }, [state.navEmailAddres])
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
                        <span>
                            {log ? (
                                <Link className={`navigationLink ${activeLink === "/Login" ? "active" : ""}`} onClick={()=>{logOutCheck()}} ><IoMdLogOut />Log Out {state.navEmailAddres}</Link>
                            ) : (
                                <Link className={`navigationLink ${activeLink === "/Login" ? "active" : ""}`} onClick={() =>  setActiveClass('/Login')} to="login" ><IoMdLogOut />Login</Link>
                            )}
                        </span>
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