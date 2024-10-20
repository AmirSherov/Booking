import "./style.scss";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useContext } from "react";
import { context } from "../../../store"
function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, dispatch } = useContext(context)
    const navigate = useNavigate()
    async function handleLogin(e) {
        e.preventDefault();
        const emailinput = document.querySelector(".email");
        const passinput = document.querySelector(".pass");
        try {
            const response = await fetch('http://localhost:3000/Users');
            const users = await response.json();
            const user = users.find(user => user.Email === email && user.Password === password);

            if (user) {
                toast.success('Successfully logged in!');
                setTimeout(() => {
                    setEmail('')
                    setPassword('')
                    navigate('/') 
                    localStorage.setItem('Email', email)
                }, 1000)
            } else {
                toast.error('Invalid email or password');
                emailinput.style.boxShadow = "0 0 15px 10px rgba(255, 0, 0, 0.8)";
                passinput.style.boxShadow = "0 0 15px 10px rgba(255, 0, 0, 0.8)";
                setTimeout(() => {
                    emailinput.style.boxShadow = "none";
                    passinput.style.boxShadow = "none";
                }, 5500);
            }
        } catch (error) {
            toast.error('An error occurred: ' + error.message);
        }
    }
    return (
        <form className="LoginContainer" onSubmit={handleLogin}>
            <ToastContainer />
            <div className="inputWrapper">
                <input
                    placeholder="Email"
                    required
                    type="email"
                    value={email}
                    className="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Password"
                    required
                    className="pass"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="confirm">Login</button>
                <div className="LinkWrapper">
                    <span className="Link">Don't have an account?</span>
                    <Link className="Linkto" to={"/registration"}>Create It!</Link>
                </div>
            </div>
        </form>
    );
}

export default Login;
