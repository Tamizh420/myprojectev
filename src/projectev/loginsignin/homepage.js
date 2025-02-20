import React from "react";
import './homepage.css'



class Homepage extends React.Component {
    constructor() {
        super();
    }
    getBook = () => {
        window.location.href = './login'
    }
    render() {
        return (
            <>

                <div className="ev">
                    <section className="intro-section">
                        <b>EV Charging Station Finding and <br /> Booking</b>
                    </section>

                    {/* Additional Content */}
                    <div className="features">
                        <h2>Key Features</h2>
                        <ul>
                            <li>Find nearby EV charging stations</li>
                            <li>Book a slot for charging</li>
                            <li>View real-time availability</li>
                            <li>Track your charging progress</li>
                            <li>Leave reviews for stations</li>
                        </ul>
                    </div>

                    <div className="cta">
                        <button onClick={this.getBook} className="cta-button">Start Booking Now</button>
                    </div>
                </div>




            </>
        )
    }
}
export default Homepage