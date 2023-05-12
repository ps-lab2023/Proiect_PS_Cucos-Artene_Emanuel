// @ts-ignore
import React, {useState} from 'react';
import './loginPage.css';
import {NavLink, useNavigate} from 'react-router-dom';
import authService from '../../Api/authApi.js';

function LoginPage() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onClickLoginButton = () => {
        authService.loginUser({
            username: username,
            password: password
        }).then((res)  => {
            // @ts-ignore
            if(res.data.roles.includes("ROLE_ADMIN")){
                navigate('/dashboard');
            } else {
                navigate('/home');
            }
        }).catch(err => console.log(err.message));
    }

    return (
        <div className="box-form">
            <div className="left">
                <div className="overlay">
                    <h1>Hello Traveler!</h1>
                </div>
            </div>
            <div className="right">
                <h5>Login</h5>
                <div className="inputs">
                    <input type="text"
                           placeholder="Username"
                           onChange={e => setUsername(e.target.value)}
                           value={username}
                    >
                    </input>
                    <input type="password"
                           placeholder="Password"
                           onChange={e => setPassword(e.target.value)}
                           value={password}
                    ></input>
                    <div>
                        <br></br>
                        <button onClick={onClickLoginButton}>Login</button>
                    </div>
                    <p><NavLink to={'/forgotPassword'} className="navbar-item">Forgot password? </NavLink></p>
                </div>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>Don't have an account? <NavLink
                        className="navbar-item"
                        to="/register"
                    >
                        Create your account!
                    </NavLink> It takes less than a minute</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;