import React from 'react';
import '../style/main.css';
import pic from '../images/back1.jpg'
import { useNavigate } from 'react-router-dom'; // Corrected import statement

const Main = () => { // Corrected component name to start with an uppercase letter
    const navigate = useNavigate();

    return (
        <div>
            <div className="topnav4">
                <a className="active" href="#home">Home</a>
                <a href="/">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <h1 style={{color:"white"}}>e-Commerce Website</h1>
            </div>

            <div id='RL'>
                <div id='RL1' onClick={() => navigate("/register")}>Register</div>
                <div id='RL1' onClick={() => navigate("/login")}>Login</div>
            </div>
        </div>
    )
}

export default Main;
