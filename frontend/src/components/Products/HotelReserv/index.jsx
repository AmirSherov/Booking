import Item from './item.jsx';
import './style.scss';
import img1 from '../../../assets/images/room1.jpg';
import img2 from '../../../assets/images/room2.jpeg';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

function HotelReserv() {
    const [style1, setStyle1] = useState(0);
    const [style2, setStyle2] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY >= 1450) {
                setStyle1(1);
            }
            else if (scrollY < 1400) {
                setStyle1(0)
            } 

            if (scrollY >= 2100) {
                setStyle2(1);
            } else if (scrollY < 2500) {
                setStyle2(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <ToastContainer/>
            <div style={{ opacity: style1, transition: '0.5s linear' }} className="1">
                <Item
                    id={1728233406627}
                    img={img1}
                    time={"23:00"}
                    date={"23.09.2004"}
                    name={'San Tiego'}
                    price={300}
                />
            </div>
            <div style={{ opacity: style2, transition: '0.5s linear' }} className="2">
                <Item
                    id={1728233406890}
                    img={img2}
                    time={"17:30"}
                    date={"26.03.2025"}
                    name={'San Francisco'}
                    price={500}
                />
            </div>
        </>
    );
}

export default HotelReserv;
