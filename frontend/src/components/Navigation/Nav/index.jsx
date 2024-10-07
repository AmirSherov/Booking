import "./style.scss";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { useState } from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import { MdSaveAs } from "react-icons/md";
import { context } from "../../../../store";
import { useContext, useEffect } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { TbBrandBooking } from "react-icons/tb";
import 'sweetalert2/src/sweetalert2.scss';

function Nav(props) {
    const [activeLink, setActiveLink] = useState('/')
    const { state, dispatch } = useContext(context)
    const [modal , setModal] = useState(false)
    const [log, setLog] = useState(false)
    const [email , setEmail ] = useState('')
    function setActiveClass(path) {
        setActiveLink(path);
    }
    useEffect(() => {

        function getEmail(){
            const userEmail = localStorage.getItem('Email')
            if(userEmail){
             setEmail(userEmail)
             setLog(true)
            } else {
                setEmail('')
                setLog(false)
            }
        }
getEmail()
    }, [])
    return (
        <>
        <nav>
            <div className="bottom">
                <div className="left">
                    <Link to={"/"}>
                        <h1 className="logo"><TbBrandBooking />Booking</h1>
                    </Link>
                </div>
                <div className="right">
                    <div className="links">
                        <Link className={`navigationLink ${activeLink === "/" ? "active" : ""}`} onClick={() => setActiveClass('/')} to="/"> <AiOutlineProduct />Products</Link>
                        <Link className={`navigationLink ${activeLink === "/Contact" ? "active" : ""}`} onClick={() => setActiveClass('/Contact')} to="reservs"><MdSaveAs />Reservations</Link>
                        <span>
                            {log ? (
                                <Link className={`navigationLink ${activeLink === "/Login" ? "active" : ""}`} onClick={()=>{
                                    setModal(true)
                                    setTimeout(()=>{
                                        setModal(false)
                                    },2000)
                                    setTimeout(()=>{
                                        Swal.fire({
                                            title: "Are you sure?",
                                            text: "Do you want to log out from Accaunt?",
                                            icon: "warning",
                                            showCancelButton: true,
                                            confirmButtonColor: "#3085d6",
                                            cancelButtonColor: "#d33",
                                            confirmButtonText: "Log out!"
                                          }).then((result) => {
                                            if (result.isConfirmed) {
                                              setModal(true)
                                              setTimeout(()=>{
                                                setModal(false)
                                              },1000)
                                              setTimeout(()=>{
                                                Swal.fire({
                                                    title: "Logged Out!!",
                                                    text: "You logged out from Accaunt",
                                                    icon: "success"
                                                  });
                                              },1200)
                                              localStorage.removeItem('Email'), setLog(!log)
                                            }
                                          });
                                    },2200)
                                    
                                }} ><IoMdLogOut />Log Out {email}</Link>
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
        
       {modal &&
        <div className="loadingAnimation">
        <div className="Alltriangle">
            <div className="triangle1"></div>
            <div className="triangle2"></div>
            <div className="triangle3"></div>
        </div>
    </div>}
        </>
    )
}

export default Nav;