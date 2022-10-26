import React from "react";
import '../styles/homeStyles.css'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
      <h1 className="headerText">Esmito Support</h1>
      <div className="buttonContainer">
        <Link to="/register-complaint">
          <button className="homeButton"><span className="buttonText">Register Complaint</span></button>
        </Link>
        <br />
        <Link to="/schedule-repair">
          <button className="homeButton"><span className="buttonText">Schedule Repair</span></button>
        </Link>
      </div>
    </div>
  )
}