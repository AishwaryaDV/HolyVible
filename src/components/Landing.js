import React from 'react'
import {useNavigate} from "react-router-dom";
import './landing.css'

const Landing = (props) => {
    const navigate= useNavigate();

  return (
    <div className="landing-page-section">
    <h1>Holy Vible</h1>
    <h2 className="header-tagline">
        <span>Let the</span> good vibes <span>roll</span>
    </h2>
    <button className="landing-page-btn" onClick={()=>navigate("/home")}>Let's get started</button>
    </div>
  )
}

export default Landing