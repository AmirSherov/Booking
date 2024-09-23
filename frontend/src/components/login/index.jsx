import "./style.scss";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
function Login(props) {
    return (
       
        <form className="LoginContainer">
             <ToastContainer />
            <div className="inputWrapper">
                <input placeholder="Email" required type="email" />
                <input placeholder="Password" required type="password" />
                <button onClick={()=>{toast.success('Successfully logged in!')}} className="confirm">Login</button>
                <div className="LinkWrapper">
                    <span className="Link">Dont have an accaunt?</span ><Link className="Linkto" to={"/registration"}>Create It!</Link>
                </div>
            </div>

        </form>
    )
}
export default Login;