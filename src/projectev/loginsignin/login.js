


import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Homepage from "./homepage";
import './login.css'

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                console.log(result)
                if (result.status == 200) {
                    navigate("/ev")
                } else {
                    navigate("/register")
                    alert("You are not registered to this service")

                }

            })
            .catch(err => console.log(err))
    }

    return (<div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="login-container p-4 rounded shadow-lg">
            <h2 className="text-center  mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                        <strong>Email</strong>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        className="form-control custom-input"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                        <strong>Password</strong>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        className="form-control custom-input"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn custom-btn w-100 rounded-0">
                    Login
                </button>
            </form>
            <p className="text-center mt-3">Don't have an account?</p>
            <Link
                to="/register"
                className="btn btn-outline-dark w-100 rounded-0 text-decoration-none mt-2"
            >
                Sign Up
            </Link>
        </div>
    </div>

    );
}

export default Login;