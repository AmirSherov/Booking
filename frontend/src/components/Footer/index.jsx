import { Outlet, Link } from 'react-router-dom'
import Foot from "./Foot"
import "./style.scss"

function Footer() {
    return (
        <>

            <main>
                <Outlet />
            </main>

            <footer> <Foot /></footer>
        </>
    );
}

export default Footer;