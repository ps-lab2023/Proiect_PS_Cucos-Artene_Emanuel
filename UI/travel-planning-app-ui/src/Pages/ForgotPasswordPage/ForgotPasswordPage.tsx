// @ts-ignore
import React, {useState} from 'react';
import './forgotPasswordPage.css';
import authServices from '../../Api/authApi'
import emailServices from '../../Api/emailApi'

function ForgotPasswordPage() {

    const [userToken, setUserToken] = useState("");
    const [goodToken, setGoodToken] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onClickChangePassword = () => {
        if(userToken !== goodToken) {
            setErrorMessage("Wrong token");
            return;
        }
        if(password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
        setErrorMessage("");
        const data = {
            email: email,
            newPass: confirmPassword
        }
        authServices.changeUserPassword(data);
    }

    function onClickSendCodeEmail() {
        const data = {
            recipient: email,
            msgBody: "Your code is: ",
            subject: "change password code",
        }
        emailServices.sendCodedMail(data).then(res => {
            setGoodToken(res);
        });
    }

    return (
        <div className="formReg-background">
            <div className="box-formReg">
                <div className="rightReg">
                    <div className="inputs">
                        <h5>Password</h5>
                        <h4 style={{fontSize: '80px', marginTop: '0'}}>Change</h4>
                        <input type="text"
                               placeholder="Email Address"
                               onChange={e => setEmail(e.target.value)}
                               value={email}
                        >
                        </input>
                        <br></br>
                        <br></br>
                        <button onClick={onClickSendCodeEmail}>Send change pass code</button>
                        <br></br>
                        <input type="text"
                               placeholder="Change Password Code"
                               onChange={e => setUserToken(e.target.value)}
                               value={userToken}
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
                        <div>
                            <br></br>
                            <button onClick={onClickChangePassword}>ChangePassword</button>
                            <label>{errorMessage}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;