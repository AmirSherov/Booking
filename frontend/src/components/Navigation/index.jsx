import { Outlet, Link } from 'react-router-dom';
import Nav from "./Nav";
import "./style.scss";
import Footer from "../Footer";
function Navigation() {
    return (
        <>
            <header>
                <Nav />
            </header>

            <main>
                <Outlet />
            </main>

          <Footer/>
        </>
    );
}

export default Navigation;