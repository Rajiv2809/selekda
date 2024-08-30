import React, { useState } from 'react';
import '../assets/register.css';
import axiosClient from '../axios';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData();
        formData.append('name', name);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('dateOfBirth', dateOfBirth);
        formData.append('phoneNumber', phoneNumber);
        if (profilePicture) {
            formData.append('profilePicture', profilePicture);
        }

        axiosClient.post('/register', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(({ data }) => {
            console.log('Registration successful:', data);
            navigate('/home')
        })
        .catch((err) => {
            console.error('Registration failed:', err.response.data.message);
        });
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-group form-group-name">
                <label htmlFor="name" className="label-name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="form-group form-group-username">
                <label htmlFor="username" className="label-username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="input-username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>

            <div className="form-group form-group-email">
                <label htmlFor="email" className="label-email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="form-group form-group-dateOfBirth">
                <label htmlFor="dateOfBirth" className="label-dateOfBirth">Date of Birth:</label>
                <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    className="input-dateOfBirth"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    required
                />
            </div>

            <div className="form-group form-group-phoneNumber">
                <label htmlFor="phoneNumber" className="label-phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="input-phoneNumber"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>

            <div className="form-group form-group-profilePicture">
                <label htmlFor="profilePicture" className="label-profilePicture">Profile Picture:</label>
                <input
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    className="input-profilePicture"
                    accept="image/*"
                    onChange={(e) => setProfilePicture(e.target.files[0])}
                />
            </div>

            <input type="submit" value="Submit" className="submit-btn" />
        </form>
    );
}
