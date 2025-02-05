import React, { useState } from 'react';
import './PortfolioPage.css';

function PortfolioPage() {
    const [showSlidingPage, setShowSlidingPage] = useState(false);
    const [currentProject, setCurrentProject] = useState({});

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

    const projects = [
        {
            title: 'Sorting Visualizer',
            image: 'Images/sortviz.png',
            software: 'Visual Studio Code',
            lang: 'Javascript',
            description: 'A React web application that interactively visualizes array sorting with algorithms like Bubble Sort, Quick Sort, and Merge Sort, using MongoDB to store user input arrays'
        },
        {
            title: 'Direct Mapped Cache Simulator',
            image: 'Images/cache.png',
            software: 'Visual Studio Code',
            lang: 'Javascript',
            description: 'React application simulates a cache memory system, allowing users to input memory and cache parameters, track hit/miss rates, and edit memory values dynamically while utilizing a direct-mapped caching technique.'
        },
        {
            title: 'ChatBot with Multimedia Application',
            image: 'Images/chatbot.png',
            software: 'Visual Studio Code',
            lang: 'Python',
            description: 'The project is a server script that uses threading to manage multiple client connections concurrently, handling message broadcasting and file forwarding.',
            link: 'https://github.com/Shachi-23/chatbot_with_multimedia_communiction'
        },
        {
            title: 'Shadow Rover',
            image: 'Images/mpca.jpg',
            software: 'Arduino Integrated Development Environment',
            lang: 'C++',
            description: 'A Hardware project involves designing and implementing a mini car robot with obstacle avoidance, line following, and Bluetooth remote control capabilities, using ultrasonic and infrared sensors, an Arduino microcontroller, and integrating advanced algorithms for autonomous navigation.'
        },
        {
            title: 'Banking Management System',
            image: 'Images/bms.png',
            software: 'Visual Studio Code',
            lang: 'C++',
            description: 'The Banking Management System streamlines banking operations with a user-friendly interface for account management, transactions, and secure exits.',
            link:'https://github.com/Shachi-23/Banking_Management_System'
        },
        {
            title: 'Image to Sketch Converter',
            image: 'Images/imgtoskc.jpg',
            software: 'Visual Studio Code',
            lang: 'Python',
            description: 'A project that transforms digital images into pencil sketch drawings using image processing techniques. It leverages libraries such as OpenCV to apply grayscale conversion, Gaussian blur, and edge detection to produce realistic sketch effects. This tool can be used for artistic purposes, enhancing photographs, or as a fun application for creating personalized sketches.'
        },
        {
            title: 'Tic-Tac-Toe Game',
            image: 'Images/tictactoe.png',
            software: 'Visual Studio Code',
            lang: 'C Lang',
            description: 'A basic game implemented using a queue and linked list efficiently manages game moves and player turns. This project uses linked lists to dynamically store and update the game board, while a queue handles player actions in a first-in, first-out manner. It demonstrates fundamental data structure operations and provides an engaging way to understand and apply linked lists and queues in a real-world scenario.',
            link:'https://github.com/Shachi-23/TIC_TAC_TOE_GAME'
        },
        {
            title: 'TradeWise',
            image: 'Images/ze.jpg',
            software: 'Visual Studio Code',
            lang: 'Javascript, Node, Mongodb',
            description: 'A Full stack stock monitoring tool using React replicates the core functionalities and user interface of the popular Zerodha trading platform. This project involves building responsive web pages, integrating real-time data handling, and implementing interactive features such as stock charts and trading tools using Reacts component-based architecture. It serves as a comprehensive exercise in developing complex, user-friendly web applications with modern front-end technologies.',
            link : 'https://github.com/Shachi-23/Full_Stack_Stock_Monitoring_Tool'
        },
        {
            title: 'WeatherNow',
            image: 'Images/weather.jpg',
            software: 'Visual Studio Code',
            lang: 'Javascript',
            description: 'WeatherNow is a sleek and interactive app that provides real-time weather updates for any location you enter.'
        },
        {
            title: 'Student course enrollment System',
            image: 'Images/course_enrollment.jpg',
            software: 'Visual Studio Code',
            lang: 'Javascript, node, mysql',
            description: ' A seamless student course enrollment and management system built with React, Node.js, and MySQL for efficient course selection and management.',
            link : 'https://github.com/Shachi-23/student_elective_enrollment'
        },
        {
            title: 'Recipe Finder',
            image: 'Images/recipe_finder.jpg',
            software: 'Visual Studio Code',
            lang: 'Javascript',
            description: 'A convenient recipe-finding app that helps you discover tasty dishes based on the ingredients you have, making cooking easier and fun'
        },
        {
            title: 'SheetCraft',
            image: 'Images/Spreedsheet.png',
            software: 'Visual Studio Code',
            lang: 'Javascript',
            description: 'A Google Sheets clone that enables users to create and manage data in an interactive spreadsheet, offering real-time editing and customization.',
            link:'https://github.com/Shachi-23/Zeotap_Google_Sheets'
        }
    ];

    const handleImageClick = (project) => {
        setCurrentProject(project);
        setShowSlidingPage(true);
    };

    const closeSlidingPage = () => {
        setShowSlidingPage(false);
    };

    const SlidingPage = ({ show, onClose, project }) => {
        const imageStyle = {
            width: '500px',
            maxWidth: '600px',
            height: '300px',
            borderRadius: '4px',
            marginLeft: "13px",
            marginTop: "10px"
        };
        return (
            <div className={`sliding-page ${show ? 'show' : ''}`}>
                <div className="content" style={{ fontSize: "18px" }}>
                    <img src={project.image} alt={project.title} className="img-fluid mb-4" style={imageStyle} />
                    <h2 className='fs-3' style={{ color: "#ffb400" }}>{project.title}<button className="close-button" onClick={onClose} style={{ marginLeft: "440px" }}>× Close</button></h2>
                    <p><i className="fa fa-briefcase mx-2" aria-hidden="true"></i> <span style={{ color: "white", opacity: "75%" }}> Software tool : </span>{project.software}</p>
                    <p><i className="fa fa-book mx-2" aria-hidden="true"></i> <span style={{ color: "white", opacity: "75%" }}> Language Used : </span>{project.lang}</p>
                    <p><i className="fa fa-sticky-note mx-2 text-center" aria-hidden="true"></i> <span style={{ color: "white", opacity: "75%" }}> Description : </span>{project.description}</p>
                    <p><i class="fa fa-link mx-2" aria-hidden="true"><span className='mx-3'style={{ color: "white", opacity: "75%" }}> Get Code : </span></i> {project.link}</p>
                </div>
            </div>
        );
    };

    return (
        <div style={containerStyle}>
            <div className='container'>
                <div className={`container ${showSlidingPage ? 'blur' : ''}`}>
                    <div className='row border-bottom'>
                        <h1 id="aboutme" className='text-center mt-5 page-title'>
                            MY <span style={{ color: "#ffb400" }}>PORTFOLIO</span>
                        </h1>
                        <p style={textCenterStyle} className='mt-3'>
                            <div style={lineStyle} className='mx-3'></div>
                            <span style={{ color: "white", opacity: "80%" }}>CHECK OUT THE DIVERSE AND CREATIVE PROJECTS I'VE BEEN WORKING ON.</span>
                            <div style={lineStyle} className='mx-3'></div>
                        </p>
                    </div>
                    <div className='portfolio-section'>
                        <div className='container cd-container'>
                            <div>
                                <ul className='row mt-5' id='portfolio-items' style={{ listStyle: "none" }}>
                                    {projects.map((project, index) => (
                                        <li key={index} className='col-12 col-md-6 col-lg-4'>
                                            <a href='#' onClick={() => handleImageClick(project)}>
                                                <div className='flip-card'>
                                                    <div className='flip-card-inner'>
                                                        <div className='flip-card-front'>
                                                            <img src={project.image} alt={project.title} style={{ width: "300px", height: "210px", borderRadius: "16px" }} />
                                                        </div>
                                                        <div className='flip-card-back'>
                                                            {/* <img src={project.image} alt={project.title} /> */}
                                                            <h3>{project.title}</h3>
                                                            <p>Click to know more and get the source code</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <SlidingPage show={showSlidingPage} onClose={closeSlidingPage} project={currentProject} />
            </div>
        </div>
    );
}

export default PortfolioPage;
