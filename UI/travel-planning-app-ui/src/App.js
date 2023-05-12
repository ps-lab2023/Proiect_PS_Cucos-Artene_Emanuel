import './App.css';
import LoginPage from "./Pages/LoginPage/LoginPage.tsx";
import RegisterPage from "./Pages/RegisterPage/RegisterPage.tsx";
import UserHomePage from "./Pages/UserHomePage/UserHomePage.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AdminPage from "./Pages/AdminPage/AdminPage.tsx";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage/ForgotPasswordPage.tsx";
import ChatRoom from "./Pages/ChatRoomPage/ChatRoom";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/dashboard" element={<AdminPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/home" element={<UserHomePage/>}/>
                    <Route path="/forgotPassword" element={<ForgotPasswordPage/>}/>
                    <Route path="/support" element={<ChatRoom/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
