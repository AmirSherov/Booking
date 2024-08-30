import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./Home";
import About from './About';
import Navigation from './Navigation';
import PageNotFound from './PageNotFound';
import Shop from "../components/Shop";
import Footer from "../components/Footer"

function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="shop" element={<Shop />} />
                <Route path="*" element={<PageNotFound />} />
                 
            </Route>
        </Routes>
        
    )
}

export default AllComponents;