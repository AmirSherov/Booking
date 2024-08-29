import "./style.scss"
import NotFoundImg from "../../assets/images/404_page.jpg"
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="page-not-found-wrapper">
            <img src={NotFoundImg} alt="" />
            <Link className="go-home" to={"/"}>Go Home</Link>
        </div>
    )
}

export default PageNotFound;