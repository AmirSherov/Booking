import "./style.scss"
import Heading from "../common/Heading"
import { FaHome } from "react-icons/fa";
import Footer from "../Footer";
function Home() {
    return (
        <>
        <div className="home-page-wrapper">
            <Heading title="Home" path="Home">
                <FaHome />
            </Heading>
        </div>
        <Footer title = {200} />
        </>
    );
}

export default Home;