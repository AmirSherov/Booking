// import "./style.scss";
// import { Link } from "react-router-dom";
// import { IoMdLogOut } from "react-icons/io";
// import { useState } from 'react';
// import { AiOutlineProduct } from "react-icons/ai";
// import { MdSaveAs } from "react-icons/md";
// import { context } from "../../../../store";
// import { useContext, useEffect } from 'react';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
// import { TbBrandBooking } from "react-icons/tb";
// import 'sweetalert2/src/sweetalert2.scss';

// function Nav(props) {
//     const [activeLink, setActiveLink] = useState('/')
//     const { state, dispatch } = useContext(context)
//     const [modal, setModal] = useState(false)
//     const [log, setLog] = useState(false)
//     const [email, setEmail] = useState('')
//     function setActiveClass(path) {
//         setActiveLink(path);
//     }
//     useEffect(() => {

//         function getEmail() {
//             const userEmail = localStorage.getItem('Email')
//             if (userEmail) {
//                 setEmail(userEmail)
//                 setLog(true)
//             } else {
//                 setEmail('')
//                 setLog(false)
//             }
//         }
//         getEmail()
//     }, [])

//     useEffect(() => {
//         const InputCheck = document.getElementById('burger-toggle');
//         const Links = document.querySelector('.links-wrapper1')

//         function change(value) {
//             if (InputCheck.checked) {
//                 Links.style.transform = 'translate(0px)'
//             } else {
//                 Links.style.transform = 'translate(-450px)'
//             }
//             if (value) {
//                 Links.style.transform = 'translate(-450px)'
//             } else {
//                 Links.style.transform = 'translate(0px)'
//             }


//             if (InputCheck) {
//                 InputCheck.addEventListener('change', change);
//             }

//             return () => {
//                 if (InputCheck) {
//                     InputCheck.removeEventListener('change', change);
//                 }
//             };
//         }, [])
//     return (
//         <>
//             <nav>
//                 <div className="bottom">
//                     <div className="left">
//                         <Link to={"/"}>
//                             <h1 className="logo"><TbBrandBooking />Booking</h1>
//                         </Link>
//                     </div>
//                     <div className="right">
//                         <div className="burger-menu-container">
//                             <input type="checkbox" id="burger-toggle" />
//                             <div class="burger-menu-wrapper">
//                                 <div></div>
//                                 <div></div>
//                                 <div></div>
//                             </div>
//                         </div>
//                         <div className="links">
//                             <Link className={`navigationLink ${activeLink === "/" ? "active" : ""}`} onClick={() => setActiveClass('/')} to="/"> <AiOutlineProduct />Products</Link>
//                             <Link className={`navigationLink ${activeLink === "/Contact" ? "active" : ""}`} onClick={() => setActiveClass('/Contact')} to="reservs"><MdSaveAs />Reservations</Link>
//                             <span>
//                                 {log ? (
//                                     <Link className={`navigationLink ${activeLink === "/Login" ? "active" : ""}`} onClick={() => {
//                                         setModal(true)

//                                         setTimeout(() => {
//                                             setModal(false)
//                                         }, 2000)
//                                         setTimeout(() => {
//                                             Swal.fire({
//                                                 title: "Are you sure?",
//                                                 text: "Do you want to log out from Accaunt?",
//                                                 icon: "warning",
//                                                 showCancelButton: true,
//                                                 confirmButtonColor: "#3085d6",
//                                                 cancelButtonColor: "#d33",
//                                                 confirmButtonText: "Log out!"
//                                             }).then((result) => {
//                                                 if (result.isConfirmed) {
//                                                     setModal(true)
//                                                     setTimeout(() => {
//                                                         setModal(false)
//                                                     }, 1000)
//                                                     setTimeout(() => {
//                                                         Swal.fire({
//                                                             title: "Logged Out!!",
//                                                             text: "You logged out from Accaunt",
//                                                             icon: "success"
//                                                         });
//                                                     }, 1200)
//                                                     localStorage.removeItem('Email'), setLog(!log)
//                                                 }
//                                             });
//                                         }, 2200)

//                                     }} ><IoMdLogOut />Log Out {email}</Link>
//                                 ) : (
//                                     <Link className={`navigationLink ${activeLink === "/Login" ? "active" : ""}`} onClick={() => setActiveClass('/Login')} to="login" ><IoMdLogOut />Login</Link>
//                                 )}
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="animation">
//                     <div className="lineVis">
//                         <div className="line"></div>
//                     </div>
//                 </div>
//             </nav>

//             {modal &&
//                 <div className="loading">
//                     <div class="lds-spinner">
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                     </div>
//                 </div>
//             }
//             <div className="links-wrapper1">
//                 <div className="links1">
//                     <span><Link className={`navigationLink ${activeLink === "/" ? "active" : ""}`} onClick={() => setActiveClass('/')} to="/"> <AiOutlineProduct />Products</Link></span>
//                     <span><Link className={`navigationLink ${activeLink === "/Contact" ? "active" : ""}`} onClick={() => setActiveClass('/Contact')} to="reservs"><MdSaveAs />Reservations</Link></span>
//                     <span>
//                         {log ? (
//                             <Link className={`navigationLink ${activeLink === "/Login" ? "active" : ""}`} onClick={() => {
//                                 setModal(true)
//                                 setTimeout(() => {
//                                     setModal(false)
//                                 }, 2000)
//                                 setTimeout(() => {
//                                     Swal.fire({
//                                         title: "Are you sure?",
//                                         text: "Do you want to log out from Accaunt?",
//                                         icon: "warning",
//                                         showCancelButton: true,
//                                         confirmButtonColor: "#3085d6",
//                                         cancelButtonColor: "#d33",
//                                         confirmButtonText: "Log out!"
//                                     }).then((result) => {
//                                         if (result.isConfirmed) {
//                                             setModal(true)
//                                             setTimeout(() => {
//                                                 setModal(false)
//                                             }, 1000)
//                                             setTimeout(() => {
//                                                 Swal.fire({
//                                                     title: "Logged Out!!",
//                                                     text: "You logged out from Accaunt",
//                                                     icon: "success"
//                                                 });
//                                             }, 1200)
//                                             localStorage.removeItem('Email'), setLog(!log)
//                                         }
//                                     });
//                                 }, 2200)

//                             }} ><IoMdLogOut />Log Out {email}</Link>
//                         ) : (
//                             <Link className={`navigationLink ${activeLink === "/Login" ? "active" : ""}`} onClick={() => setActiveClass('/Login')} to="login" ><IoMdLogOut />Login</Link>
//                         )}
//                     </span>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Nav;
import "./style.scss";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { useState, useEffect, useContext } from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import { MdSaveAs } from "react-icons/md";
import { context } from "../../../../store";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { TbBrandBooking } from "react-icons/tb";
import 'sweetalert2/src/sweetalert2.scss';

function Nav() {
    const [activeLink, setActiveLink] = useState('/');
    const { state, dispatch } = useContext(context);
    const [modal, setModal] = useState(false);
    const [modal2, setmodal2] = useState(false);
    const [log, setLog] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const userEmail = localStorage.getItem('Email');
        if (userEmail) {
            setEmail(userEmail);
            setLog(true);
        } else {
            setEmail('');
            setLog(false);
        }
    }, []);

    const handleLogout = () => {
        setModal(true);
        setmodal2(false)
        setTimeout(() => {
            setModal(false);
        }, 2000);
        
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to log out from your account?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                setModal(true);
                setTimeout(() => {
                    setModal(false);
                }, 1000);
                setTimeout(() => {
                    Swal.fire({
                        title: "Logged Out!!",
                        text: "You logged out from your account",
                        icon: "success"
                    });
                }, 1200);
                localStorage.removeItem('Email');
                setLog(false);
            }
        });
    };
    function change() {
        setmodal2(!modal2);
    }

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
                        <div className="burger-menu-container">
                            <input onClick={change} type="checkbox" id="burger-toggle" />
                            <div  className="burger-menu-wrapper">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="links">
                            <Link className={`navigationLink ${activeLink === "/" ? "active" : ""}`} onClick={() => setActiveLink('/')} to="/"> <AiOutlineProduct />Products</Link>
                            <Link className={`navigationLink ${activeLink === "/reservs" ? "active" : ""}`} onClick={() => setActiveLink('/reservs')} to="/reservs"><MdSaveAs />Reservations</Link>
                            <span>
                                {log ? (
                                    <Link className={`navigationLink ${activeLink === "/Login" ? "active" : ""}`} onClick={handleLogout}><IoMdLogOut />Log Out {email}</Link>
                                ) : (
                                    <Link className={`navigationLink ${activeLink === "/Login" ? "active" : ""}`} onClick={() => setActiveLink('/Login')} to="/login"><IoMdLogOut />Login</Link>
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

            {modal && (
                <div className="loading">
                    <div className="lds-spinner">
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
                </div>
            )}
{modal2 &&  <div className="links-wrapper1">
                <div className="links1">
                    <span><Link className={`navigationLink ${activeLink === "/" ? "active" : ""}`} onClick={() => setActiveLink('/')} to="/"> <AiOutlineProduct />Products</Link></span>
                    <span><Link className={`navigationLink ${activeLink === "/reservs" ? "active" : ""}`} onClick={() => setActiveLink('/reservs')} to="/reservs"><MdSaveAs />Reservations</Link></span>
                    <span>
                        {log ? (
                            <Link className={'logout'} onClick={handleLogout}><IoMdLogOut />Log Out {email}</Link>
                        ) : (
                            <Link className={`navigationLink ${activeLink === "/Login" ? "active" : ""}`} onClick={() => setActiveLink('/Login')} to="/login"><IoMdLogOut />Login</Link>
                        )}
                    </span>
                </div>
            </div>}
           
        </>
    );
}

export default Nav;
