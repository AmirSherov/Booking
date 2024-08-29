import { Outlet, Link } from 'react-router-dom'
import Nav from "./Nav"
import "./style.scss"

function Navigation() {
    return (
        <>
            <header>
                <Nav />
            </header>

            <main>
                <Outlet />
            </main>

            <footer></footer>
        </>
    );
}

export default Navigation;