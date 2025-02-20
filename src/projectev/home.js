import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import './home.css'
import Login from './loginsignin/login.js'
import Signup from "./loginsignin/signin.js";
import Home from "./loginsignin/homepage.js";

import EV from './EV.js';
import Admin from "./admin.js";

import Mybooking from "./mybooking.js";
class Homepage extends React.Component {
    constructor() {
        super()
        this.state = {
            localdata: [],
            locations: ''
        }
    }





    render() {
        return (<>
            <div className="evback">
                <BrowserRouter>
                    <nav className="navbar navbar-expand sticky-top" id="nav">
                        <div className="container-fluid justify-content-end">
                            <a className="navbar-brand" href="#" style={{ color: 'white', fontSize: '1.8rem' }}>EVcharge</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/" className="Link"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="Link"><a className="nav-link active" aria-current="page" href="#">Book</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/booking' className="Link"><a className="nav-link active" aria-current="page" href="#">My Booking</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Routes>
                        <Route path="/ev" element={<EV />} />
                        <Route path='/register' element={<Signup />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/' element={<Home />} />
                        <Route path="/booking" element={<Mybooking />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>


                </BrowserRouter>
            </div>

        </>)
    }
}
export default Homepage;

/**/