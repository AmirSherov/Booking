import "./style.scss"
import Heading from "../common/Heading"
import { FaHome } from "react-icons/fa";

function Home() {
    return (
        <div className="home-page-wrapper">
            <Heading title="Home" path="Home">
                <FaHome />
            </Heading>
        </div>
    );
}

export default Home;