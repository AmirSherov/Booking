import "./style.scss";
import Heading from "../common/Heading";
import { BsPatchQuestionFill } from "react-icons/bs";
import Footer from "../Footer";

function About(props) {
    // props = props ? props : "..."

    return (
        <>
            <div className="about-page-wrapper">
                <Heading title="About" path="About">
                    <BsPatchQuestionFill />
                </Heading>
                {/* plus || minus || division || multiply */}
            </div>
            <Footer title={100} />
        </>
    );
}

export default About;