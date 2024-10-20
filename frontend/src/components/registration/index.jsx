import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.scss";
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Registration(props) {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        Email: '',
        Password: '',
        ConfirmPassword: ''
    });
    const [isRegistering, setIsRegistering] = useState(false);

    useEffect(() => {
        getExistUsersFromDataBase();
    }, []);

    function setChangesLocal(e) {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    }

    async function sendInfoToDataBase() {
        try {
            setIsRegistering(true);
            const response = await fetch('http://localhost:3000/Users', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...info, id: Date.now().toString() })
            });
            if (response.ok) {
                toast.success('Successfully Registered');
                setInfo({ Email: '', Password: '', ConfirmPassword: '' });
                getExistUsersFromDataBase();
            } else {
                toast.error('Failed to register');
            }
        } catch (error) {
            toast.error('An error occurred: ' + error.message);
        } finally {
            setTimeout(() => {
                setIsRegistering(false);
            }, 1000);
        }
    }

    async function getExistUsersFromDataBase() {
        try {
            const response = await fetch("http://localhost:3000/Users");
            if (response.ok) {
                const data = await response.json();
                setUsers(data);
            } else {
                toast.error('Failed to load users');
            }
        } catch (error) {
            toast.error('Failed to load users: ' + error.message);
        }
    }

    async function checkInfo() {
        let passinput = document.querySelector(".pass1");
        let passinput2 = document.querySelector(".pass2");
        let passinput3 = document.querySelector(".email");
        const { Password, ConfirmPassword, Email } = info;

        const emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;

        if (users.some(user => user.Email === Email)) {
            toast.error('The user already exists');
            passinput3.style.boxShadow = "0 0 15px 10px rgba(255, 0, 0, 0.8)";
            setTimeout(() => {
                passinput3.style.boxShadow = "none";
            }, 5000);
        } else if (Password.length < 8) {
            toast.error('Password length must be more than 8 characters');
            passinput.style.boxShadow = "0 0 15px 10px rgba(255, 0, 0, 0.8)";
            setTimeout(() => {
                passinput.style.boxShadow = "none";
            }, 5000);
        } else if (Password !== ConfirmPassword) {
            toast.error('Passwords do not match');
            passinput.style.boxShadow = "0 0 15px 10px rgba(255, 0, 0, 0.8)";
            passinput2.style.boxShadow = "0 0 15px 10px rgba(255, 0, 0, 0.8)";
            setTimeout(() => {
                passinput.style.boxShadow = "none";
                passinput2.style.boxShadow = "none";
            }, 5000);
        } else if (!Password || !ConfirmPassword) {
            toast.error('Password fields cannot be empty');
            passinput.style.boxShadow = "0 0 15px 10px rgba(255, 0, 0, 0.8)";
            passinput2.style.boxShadow = "0 0 15px 10px rgba(255, 0, 0, 0.8)";
            setTimeout(() => {
                passinput.style.boxShadow = "none";
                passinput2.style.boxShadow = "none";
            }, 5000);
        } else if (!emailRegex.test(Email)) {
            toast.error('Invalid email! Must be a Gmail address.');
            passinput3.style.boxShadow = "0 0 15px 10px rgba(255, 0, 0, 0.8)";
            setTimeout(() => {
                passinput3.style.boxShadow = "none";
            }, 5000);
        } else {
            await sendInfoToDataBase();
        }
    }

    return (
        <>
            <div className="RegistrationWrapper">
                <ToastContainer theme='dark' />
                <div className="RegistrationInputWrapper">
                    <input value={info.Email} required onChange={setChangesLocal} className='email' name="Email" placeholder="Email" type="email" />
                    <input value={info.Password} required className='pass1' onChange={setChangesLocal} name='Password' placeholder="Password" type="password" />
                    <input value={info.ConfirmPassword} required className='pass2' onChange={setChangesLocal} name='ConfirmPassword' placeholder="Confirm Password" type="password" />
                    <button
                        onClick={checkInfo}
                        className="registrateBtn"
                        disabled={isRegistering}
                    >
                        {isRegistering ? 'Registering...' : 'Register'}
                    </button>
                    <div className="linkWrapper">
                        <span className="Link2">Already have an account?</span>
                        <Link className="Linkto2" to={'/login'}>Log In!</Link>
                    </div>
                </div>
            </div>
            {isRegistering && (
                <div className="loadingAnimation">
                    <div className="Alltriangle">
                        <div className="triangle1"></div>
                        <div className="triangle2"></div>
                        <div className="triangle3"></div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Registration;
