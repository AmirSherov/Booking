import "./style.scss";
import { useState, useEffect } from 'react';
import ProductCards from "../Products/ProductsCards/index.jsx";
import HotelViwe from "../Products/HotelsViwe/index.jsx";

function AboutUs() {
    const [style, setStyle] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            let top = window.scrollY;
            if (top >= 1100) {
                setStyle(1);
            } else {
                setStyle(0);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="aboutMainContainer">
                <HotelViwe />
                <div style={{ opacity: style, transition: 'opacity 0.9s' }} className="ProductsCardWrapper">
                <ProductCards />
                </div>
            </div>
        </>
    );
}

export default AboutUs;
