import React, { useState } from 'react';
import { gsap } from 'gsap';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';
import './ContactPage.css';
import axios from 'axios';
import { MotionPathPlugin } from 'gsap/all'; // Import MotionPathPlugin

gsap.registerPlugin(MotionPathPlugin); // Register the plugin

function ContactPage() {
    const [isSent, setIsSent] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const containerStyle = {
        backgroundColor: "#222",
        height: "100%",
        minHeight: "100vh",
        color: "white",
    };

    const lineStyle = {
        width: '30px',
        borderTop: '2px solid #FFB400',
        margin: '0 5px',
    };

    const textCenterStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const inputGroupStyle = {
        position: "relative",
        marginBottom: "20px",
    };

    const inputIconStyle = {
        position: "absolute",
        top: "50%",
        left: "15px",
        transform: "translateY(-50%)",
        color: "white",
        opacity: "60%",
    };

    const textareaIconStyle = {
        position: "absolute",
        top: "15px",
        left: "15px",
        color: "white",
        opacity: "60%",
    };

    const inputStyle = {
        backgroundColor: "#333",
        border: "1px solid grey",
        color: "white",
        borderRadius: "25px",
        padding: "10px 20px 12px 40px",
        width: "100%",
        boxSizing: "border-box",
    };

    const textareaStyle = {
        backgroundColor: "#333",
        border: "1px solid grey",
        color: "white",
        borderRadius: "25px",
        padding: "15px 20px 15px 40px",
        marginBottom: "20px",
        width: "100%",
        height: "150px",
        boxSizing: "border-box",
    };

    const buttonStyle = {
        backgroundColor: "#FFB400",
        border: "none",
        color: "white",
        borderRadius: "25px",
        padding: "10px 40px",
        cursor: "pointer",
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const iconContainerStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const socialIconStyle = {
        backgroundColor: "#222",
        border: "1px solid #FFB400",
        borderRadius: "50%",
        color: "#FFB400",
        fontSize: "20px",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 10px",
        transition: "background-color 0.3s, color 0.3s",
    };

    const handleClick = () => {
        const button = document.getElementById('send-button');
        const paperPlane = document.getElementById('paper-plane');
        
        // GSAP animation sequence
        const tl = gsap.timeline({ onComplete: () => setIsSent(true) });
        tl.to(button, { duration: 0.1, scale: 0.9, transformOrigin: "50% 50%" });
        tl.to(button, { duration: 0.1, scale: 1, transformOrigin: "50% 50%" });
        tl.to(paperPlane, { duration: 1, x: 200, y: -200, ease: "power2.inOut" });
        tl.to(paperPlane, { duration: 0.5, opacity: 0 });

        const formData = {
            name,
            email,
            message,
        };

        axios.post('http://localhost:5000/send', formData)
            .then(response => {
                console.log(response.data);
                setIsSent(true); // Show sent confirmation
            })
            .catch(error => {
                console.error('There was an error sending the email!', error);
            });
    };

    return (
        <div style={containerStyle}>
            <div className='container'>
                <div className='row border-bottom'>
                    <h1 id="aboutme" className='text-center mt-3 page-title'>
                        GET <span style={{ color: "#ffb400" }}>IN TOUCH</span>
                    </h1>
                    <p style={textCenterStyle} className='mt-3'>
                        <div style={lineStyle} className='mx-3'></div>
                        <span style={{ color: "white", opacity: "80%" }}>I'M EAGER TO EXPLORE OPPORTUNITIES IN DESIGNING PROJECTS AND PARTNERSHIPS, FEEL FREE TO REACH OUT.</span>
                        <div style={lineStyle} className='mx-3'></div>
                    </p>
                </div>
                <div className='row mt-5'>
                    <div className='col-4'>
                        <p>
                            <span style={{ color: "white", opacity: "75%", fontSize: "17px" }}>Phone </span><br />
                            <i className="fa fa-whatsapp" aria-hidden="true" style={{ color: "#ffb400" }}></i> &nbsp;<span style={{ fontSize: "18px" }}> +91 9148365003</span>
                        </p>
                        <p className='mt-4'>
                            <span style={{ color: "white", opacity: "75%", fontSize: "17px" }}>Email </span><br />
                            <i className="fa fa-envelope-o" aria-hidden="true" style={{ color: "#ffb400" }}></i> &nbsp;<span style={{ fontSize: "18px" }}> shachilhgowda@gmail.com</span>
                        </p>
                        <p className='mt-4'>
                            <span style={{ color: "white", opacity: "75%", fontSize: "17px" }}>Github </span><br />
                            <i className="fa fa-github" aria-hidden="true" style={{ color: "#ffb400" }}></i> &nbsp;<span style={{ fontSize: "18px" }}> Shachi-23</span>
                        </p>
                        <p className='mt-4' style={{ color: "white", opacity: "75%", fontSize: "17px" }}>Social Profiles</p>
                        <div style={iconContainerStyle}>
                            <a href="https://www.linkedin.com/in/shachi-l-h-gowda-8351b4303/" className='social-icon' style={socialIconStyle}>
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    <div className='col-8'>
                        <p style={{ color: "white", opacity: "95%", fontSize: "17px", lineHeight: "2em" }}>
                            If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.
                        </p>
                        <div className='row'>
                            <div className='col'>
                                <form>
                                    <div style={inputGroupStyle}>
                                        <i className="fa fa-user-o" aria-hidden="true" style={inputIconStyle}></i>
                                        <input type="text" name="name" placeholder="YOUR NAME" style={inputStyle} value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                </form>
                            </div>
                            <div className='col'>
                                <form>
                                    <div style={inputGroupStyle}>
                                        <i className="fa fa-envelope-o" aria-hidden="true" style={inputIconStyle}></i>
                                        <input type="email" name="email" placeholder="YOUR EMAIL" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <form>
                            <div style={inputGroupStyle}>
                                <i className="fa fa-comments" aria-hidden="true" style={textareaIconStyle}></i>
                                <textarea name="message" placeholder="YOUR MESSAGE" style={textareaStyle} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <button
                                id="send-button"
                                type="button"
                                style={buttonStyle}
                                onClick={handleClick}
                            >
                                {isSent ? (
                                    <>
                                        <FaCheck style={{ marginRight: '10px' }} /> SENT
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane id="paper-plane" style={{ marginRight: '10px' }} /> SEND MESSAGE
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
