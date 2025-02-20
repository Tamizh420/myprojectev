import React, { useState } from "react";
import axios from "axios";
import './admin.css'

function Booking() {

    const [Name, setName] = useState('')
    const [Mobilenum, setMobilenum] = useState('')
    const [vechinum, setVechinum] = useState('')
    const [Stnname, setStnname] = useState(localStorage.getItem('evtitle'))
    const [location, setLocation] = useState(localStorage.getItem('evaddress'))
    const getvaluesubmit = async (e) => {
        e.preventDefault();


        axios.get("http://localhost:3001/api/slot", { Name, Mobilenum, vechinum, Stnname, location })
            .then(res => console.log(res))
            .catch((err) => {
                if (!err) {


                    console.log("Booking Failed")
                }
            })

        alert("Booking Successfull")
        window.location.href = './'

    }

    return (
        <> <div className="container-fluid" style={{ marginTop: "100px" }}>


            <form class="form-container">
                <div className="form-group">
                    <input onChange={(e) => { setName(e.target.value) }} type="text" name="name" value={Name} class="input-field" placeholder="Enter Name" required />
                </div>
                <div className="form-group">
                    <input onChange={(e) => { setMobilenum(e.target.value) }} type="tel" name="mobilenum" value={Mobilenum} class="input-field" placeholder="Enter Mobile Number" required />
                </div>
                <div className="form-group">
                    <input onChange={(e) => { setVechinum(e.target.value) }} type="text" name="vechinum" value={vechinum} class="input-field" placeholder="Enter Vehicle Number" required />
                </div>
                <div className="form-group">
                    <input onChange={(e) => { setStnname(e.target.value) }} type="text" name="stnname" value={Stnname} class="input-field" placeholder="Enter Station Name" required />
                </div>
                <div className="form-group">
                    <input onChange={(e) => { setLocation(e.target.value) }} type="text" name="location" value={location} class="input-field" placeholder="Enter Location" required />
                </div>
                <div className="form-group" onClick={getvaluesubmit}>
                    <input type="submit" name="submit" value="Submit" class="submit-button" />
                </div>
            </form>
        </div>
        </>
    )


}
export default Booking;