// @ts-ignore
import React, { useState } from 'react';
import './PopChat.css';
import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8080/ws-message';
export const PopChat = ( props ) => {

    let hide = {
        display: 'none',
    }

    let show = {
        display: 'block'
    }

    const [message, setMessage] = useState('You server message here.');

    const onMessageReceived = (msg) => {
        setMessage(msg.message);
    }
    const [chatOpen, setChatOpen] = useState(false)
    const toggle = () => {
        setChatOpen(!chatOpen)
    }

    const handleSend = () => {

    }


    return (
        <div id='chatCon'>
            <div className="chat-box" style={chatOpen ? show : hide}>
                <div className="header">Tech Support</div>
                <div className="msg-area">
                    { props.messages && props.messages.length > 0 &&
                        props.messages.map((msg, i) => (
                            i%2 ? (
                                <p className="right"><span>{ msg }</span></p>
                            ) : (
                                <p className="left"><span>{ msg }</span></p>
                            )
                        ))
                    }

                </div>
                <div className="footer">
                    <input type="text"  onChange={(e) => {setMessage(e.target.value)}} />
                    <button onClick={handleSend}><i className="fa fa-paper-plane"></i></button>
                </div>
            </div>
            <div className="pop">
                <p><img onClick={toggle} src={require('../../assets/textimage.png')} alt=" " /></p>
            </div>
        </div>
    )
}

export default PopChat