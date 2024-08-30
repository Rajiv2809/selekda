import React, { useState } from 'react'
import '../assets/register.css'
import axiosClient from '../axios';
export default function Register() {
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    axiosClient.post('/register', {

    }).then(({data}) =>{
        
    })
    return (
        <form method="post" action="/submit-form" enctype="multipart/form-data">

            <div className="form-group form-group-name">
                <label for="name" className="label-name">Name:</label>
                <input type="text" id="name" name="name" className="input-name" placeholder="Enter your name" required />
            </div>

            <div className="form-group form-group-username">
                <label for="username" className="label-username">Username:</label>
                <input type="text" id="username" name="username" className="input-username" placeholder="Enter your username" required />
            </div>

            <div className="form-group form-group-email">
                <label for="email" className="label-email">Email:</label>
                <input type="email" id="email" name="email" className="input-email" placeholder="Enter your email" required />
            </div>

            <div className="form-group form-group-dateOfBirth">
                <label for="dateOfBirth" className="label-dateOfBirth">Date of Birth:</label>
                <input type="date" id="dateOfBirth" name="dateOfBirth" className="input-dateOfBirth" required />
            </div>

            <div className="form-group form-group-phoneNumber">
                <label for="phoneNumber" className="label-phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" className="input-phoneNumber" placeholder="Enter your phone number" required />
            </div>

            <div className="form-group form-group-profilePicture">
                <label for="profilePicture" className="label-profilePicture">Profile Picture:</label>
                <input type="file" id="profilePicture" name="profilePicture" className="input-profilePicture" accept="image/*" required />
            </div>

            <input type="submit" value="Submit" className="submit-btn" />
        </form>
    )
}
