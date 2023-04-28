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
                    {/*<span>*/}
                    {/*    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i>Login with Facebook</a>*/}
                    {/*    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>*/}
                    {/*</span>*/}
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
                </div>
                <div>
                    <br></br>
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
                {/*<div className="remember-me--forget-password">*/}
                {/*    <label>*/}
                {/*        <input type="checkbox" name="item" checked/>*/}
                {/*        <span className="text-checkbox">Remember me</span>*/}
                {/*    </label>*/}
                {/*    <p>forget password?</p>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default LoginPage;