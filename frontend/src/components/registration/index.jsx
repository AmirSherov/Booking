

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.scss";
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Registration() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        Email: '',
        Password: '',
        ConfirmPassword: ''
    });
    const [isRegistering, setIsRegistering] = useState(false);
    
    // Рефы для полей ввода
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

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
            const response = await fetch('http://127.0.0.1:8000/users', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...info})
            });
            if (response.ok) {
                setInfo({ Email: '', Password: '', ConfirmPassword: '' });
                getExistUsersFromDataBase();
                toast.success('Successfully Registered'); // Перенаправление после успешной регистрации
                setTimeout(()=>{
                    navigate('/login');
                },3000)
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
            const response = await fetch("http://127.0.0.1:8000/users");
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
        const { Password, ConfirmPassword, Email } = info;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Более универсальная проверка

        if (!Email) {
            toast.error('Email cannot be empty');
            emailRef.current.style.borderBottom = "2px solid red";
            setTimeout(() => {
                emailRef.current.style.borderBottom = "";
            }, 5000);
        } else if (users.some(user => user.email === Email)) {
            toast.error('The user already exists');
            emailRef.current.style.borderBottom = "2px solid red";
            setTimeout(() => {
                emailRef.current.style.borderBottom = "";
            }, 5000);
        } else if (Password.length < 8) {
            toast.error('Password length must be more than 8 characters');
            passwordRef.current.style.borderBottom = "2px solid red";
            setTimeout(() => {
                passwordRef.current.style.borderBottom = "";
            }, 5000);
        } else if (Password !== ConfirmPassword) {
            toast.error('Passwords do not match');
            passwordRef.current.style.borderBottom = "2px solid red";
            confirmPasswordRef.current.style.borderBottom = "2px solid red";
            setTimeout(() => {
                passwordRef.current.style.borderBottom = "";
                confirmPasswordRef.current.style.borderBottom = "";
            }, 5000);
        } else if (!Password || !ConfirmPassword) {
            toast.error('Password fields cannot be empty');
            passwordRef.current.style.borderBottom = "2px solid red";
            confirmPasswordRef.current.style.borderBottom = "2px solid red";
            setTimeout(() => {
                passwordRef.current.style.borderBottom = "";
                confirmPasswordRef.current.style.borderBottom = "";
            }, 5000);
        } else if (!emailRegex.test(Email)) {
            toast.error('Invalid email! Must be a valid email address.');
            emailRef.current.style.borderBottom = "2px solid red";
            setTimeout(() => {
                emailRef.current.style.borderBottom = "";
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
                    <div className="inputContainer">
                        <input
                            ref={emailRef}
                            value={info.Email}
                            required
                            onChange={setChangesLocal}
                            className='email'
                            name="Email"
                            placeholder=" " // Плейсхолдер оставляем пустым для плавающей метки
                        />
                        <label>Email</label>
                    </div>

                    <div className="inputContainer">
                        <input
                            ref={passwordRef}
                            value={info.Password}
                            required
                            onChange={setChangesLocal}
                            className='pass1'
                            name="Password"
                            placeholder=" " // Плейсхолдер оставляем пустым для плавающей метки
                        />
                        <label>Password</label>
                    </div>

                    <div className="inputContainer">
                        <input
                            ref={confirmPasswordRef}
                            value={info.ConfirmPassword}
                            required
                            onChange={setChangesLocal}
                            className='pass2'
                            name="ConfirmPassword"
                            placeholder=" " // Плейсхолдер оставляем пустым для плавающей метки
                        />
                        <label>Confirm Password</label>
                    </div>

                    <button
                        className='registrateBtn'
                        onClick={checkInfo}
                        disabled={isRegistering}
                    >
                        {isRegistering ? 'Registering...' : 'Register'}
                    </button>
                    <div className="linkWrapper">
                        <Link className="Linkto2" to="/login">Back to login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Registration;
