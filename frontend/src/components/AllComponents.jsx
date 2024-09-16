import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from "./Footer";
import Contact from "../components/Contact/index.jsx"
import Products from "../components/Products/index.jsx"

function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />}>
                <Route path="/" element={<Footer />}/>
                <Route path="contact" element={<Contact />}/>
                <Route index element={<Products />} />
            </Route>
        </Routes>
    )
}

export default AllComponents;