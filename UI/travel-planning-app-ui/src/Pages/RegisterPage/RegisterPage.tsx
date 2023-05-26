// @ts-ignore
import React, {useRef, useState} from 'react';
import './registerPage.css';
import authService from '../../Api/authApi';
import {useNavigate} from 'react-router-dom';
import emailServices from '../../Api/emailApi';
import ReCAPTCHA from 'react-google-recaptcha';

function RegisterPage() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [message, setMessage] = useState("");

    const captchaRef = useRef(null);

    const onClickRegisterButton = () => {

        if(username === "" || password === '' || email === '') {
            setMessage("All fields are mandatory!");
            return;
        }
        if(password !== confirmPassword){
            setMessage("Passwords have to match!");
            return;
        }
        setMessage("");
        authService.registerUser({
            username: username,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            firstName: firstName,
            lastName: lastName,
        }).then(()  => {
            const mailData = {
                recipient: email,
                msgBody: 'Your account was successfully created! Thanks for choosing to plan your trips with us!',
                subject: 'Successful registration'
            }
            emailServices.sendSimpleMail(mailData);
            navigate('/');
        }).catch(err => console.log(err.message));
    }

    return (
        <div className="formReg-background">
            <div className="box-formReg">
                <div className="rightReg">
                    <h5>Sign Up</h5>
                    <p>And start planning your journeys!</p>
                    <div className="inputs">
                        <input type="text"
                               placeholder="Username"
                               onChange={e => setUsername(e.target.value)}
                               value={username}
                        >
                        </input>
                        <input type="email"
                               placeholder="Email Address"
                               onChange={e => setEmail(e.target.value)}
                               value={email}
                        >
                        </input>
                        <input type="password"
                               placeholder="Password"
                               onChange={e => setPassword(e.target.value)}
                               value={password}
                        ></input>
                        <input type="password"
                               placeholder="Confirm Password"
                               onChange={e => setConfirmPassword(e.target.value)}
                               value={confirmPassword}
                        ></input>
                        <input type="text"
                               placeholder="Phone Number"
                               onChange={e => setPhoneNumber(e.target.value)}
                               value={phoneNumber}
                        ></input>
                        <input type="text"
                               placeholder="First Name"
                               onChange={e => setFirstName(e.target.value)}
                               value={firstName}
                        ></input>
                        <input type="text"
                               placeholder="Last Name"
                               onChange={e => setLastName(e.target.value)}
                               value={lastName}
                        ></input>
                        <input type="text"
                               placeholder="Birthdate"
                               onChange={e => setBirthdate(e.target.value)}
                               value={birthdate}
                        ></input>
                        <label>{message}</label>
                        <div className='formGroup'>
                            <ReCAPTCHA sitekey={"6LelBR8mAAAAAAH5X-jsJRO_u0dl2iBWsuJAEc0H"} ref={captchaRef}  />
                        </div>
                        <div>
                            <br></br>
                            <button onClick={onClickRegisterButton}>Create New Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;