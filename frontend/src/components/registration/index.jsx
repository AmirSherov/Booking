
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.scss";
import { Link } from 'react-router-dom';

function Registration(props) {
    return (
        <div className="RegistrationWrapper">
            <ToastContainer theme='dark' />
            <div className="RegistrationInputWrapper">
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <input placeholder="Confirm Password" type="password" />
                <button onClick={() => { toast.success("Registration successful!") }} className="registrateBtn">Registrate</button>
                <div className="linkWrapper">
                    <span className="Link2">Already have an account?</span>
                    <Link className="Linkto2" to={'/login'}>Log In!</Link>
                </div>
            </div>
        </div>
    );
}

export default Registration;
