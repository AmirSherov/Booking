

import "./style.scss";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import { context } from "../../../store";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, dispatch } = useContext(context);
    const [isRegistering, setIsRegistering] = useState(false);
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await fetch('http://127.0.0.1:8000/users');
            if (!response.ok) throw new Error('Failed to fetch users');
            const usersData = await response.json();
            setUsers(usersData);
        } catch (error) {
            toast.error('An error occurred while fetching users: ' + error.message);
        }
    }

    async function handleLogin(e) {
        e.preventDefault();
        setIsRegistering(true); // Начинаем загрузку

        const user = users.find(user => user.email === email && user.password === password); // Проверка на правильные поля

        if (user) {
            toast.success('Successfully logged in!');
            localStorage.setItem('Email', email);
            setTimeout(() => {
                navigate('/'); // Перенаправляем после успешного логина
            }, 1000);
        } else {
            toast.error('Invalid email or password');
            setErrorMessage('Invalid email or password'); // Установим сообщение об ошибке
            setTimeout(() => {
                setErrorMessage(''); // Сбрасываем сообщение об ошибке
            }, 2000);
        }

        setIsRegistering(false); // Заканчиваем загрузку
    }

    return (
        <>
            <form className="LoginContainer" onSubmit={handleLogin}>
                <ToastContainer />
                <div className="inputWrapper">
                    <div className="inputContainer">
                        <input
                            placeholder=" "
                            required
                            type="email"
                            value={email}
                            className={`email ${errorMessage ? 'error' : ''}`}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Email</label>
                    </div>
                    <div className="inputContainer">
                        <input
                            placeholder=" "
                            required
                            className={`pass ${errorMessage ? 'error' : ''}`}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Password</label>
                    </div>
                    <button className="confirm">Login</button>
                    <div className="linkWrapper">
                        <span className="Link">Don't have an account?</span>
                        <Link className="Linkto" to={"/registration"}>Create It!</Link>
                    </div>
                </div>
            </form>
            {isRegistering && (
                <div className="loading">
                    <div className="lds-spinner">
                        {[...Array(12)].map((_, i) => <div key={i}></div>)}
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
