import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.scss";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Registration(props) {
    const [users, setUsers] = useState([]);
    const [info, setInfo] = useState({
        Email: '',
        Password: '',
        ConfirmPassword: ''
    });
    const [isRegistering, setIsRegistering] = useState(false);

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
                body: JSON.stringify({ ...info, id: Date.now() })
            });
            if (response.ok) {
                toast.success('Successfully Registered');
                setInfo({ Email: '', Password: '', ConfirmPassword: '' });
            } else {
                toast.error('Failed to register');
            }
        } catch (error) {
            toast.error('An error occurred: ' + error.message);
        } finally {
            setIsRegistering(false);
        }
    }

    async function getExistUsersFromDataBase() {
        try {
            const response = await fetch("http://localhost:3000/Users");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            toast.error('Failed to load users');
        }
    }

    async function checkInfo(e) {
        await getExistUsersFromDataBase(); 

        const { Password, ConfirmPassword, Email } = info;

        const userExists = users.some(user => user.Email === Email);

        if (userExists) {
            toast.error('The user already exists');
        } else if (Password !== ConfirmPassword) {
            toast.error('Passwords do not match');
        } else if (Password === '' || ConfirmPassword === '') {
            toast.error('Password fields cannot be empty');
        } else if (!Email.includes('@gmail.com')) {
            toast.error('Invalid email! Must be a Gmail address.');
        } else {
            await sendInfoToDataBase(); 
        }
    }

    return (
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
    );
}

export default Registration;
