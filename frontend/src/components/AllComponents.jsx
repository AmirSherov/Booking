import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./Home";
import Navigation from './Navigation';
import Footer from "./Footer";

function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />}>
                <Route path="/" element={<Footer />}/>
                <Route index element={<Home />} />
            </Route>
        </Routes>

    )
}

export default AllComponents;