import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import './home.css';
// import FormComponent from '../form-component/form-component'; 
import ContactForm from '../contact-form/contact-form';

// import PatientSummary from "../PatientSummary/PatientSummary";

import PatientAppointmentHistory from "../PatientHistory/PatientAppointmentHistory";
const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate();

    const [showForm,setShowForm] = useState(false);
    
    const onButtonClick = () => {
        // You'll update this function later
    }

    return <div className="Home">
            <div className="split-screen">
                <div className="left">
                <div className="content">
                    <h2>Left Side</h2>
                    <p>This is the left side of the screen.</p>
                </div>
                </div>
                <div className="right">
                <div className="content">
                    {/* <FormComponent />  */}
                    
                    {showForm ? <ContactForm /> : <PatientAppointmentHistory /> }
                    
                </div>
                </div>
            </div>
        </div>
}

export default Home
