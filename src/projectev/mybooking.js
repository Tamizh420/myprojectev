import React from "react";
import axios from "axios";
import './mybooking.css'


class Mybooking extends React.Component {
    constructor() {
        super()
        this.state = {
            book: []
        }
    }
    componentDidMount() {
        axios.get("/api/booking")
            .then((res) => this.setState({ book: res.data }))
            .catch(err => console.log(err))
        console.log(this.state.book);
    }
    render() {


        return (
            <div className="container-style">
                {Object.entries(this.state.book).map((item) => (
                    item[1].Name ? (
                        <div className="info-container">
                            <h5 className="styled-text">
                                <span className="label-text">Name:</span> {item[1].Name}
                            </h5>
                            <h5 className="styled-text">
                                <span className="label-text">Mobile:</span> {item[1].Mobilenum}
                            </h5>
                            <h5 className="styled-text">
                                <span className="label-text">Vehicle Number:</span> {item[1].vechinum}
                            </h5>
                            <h5 className="styled-text">
                                <span className="label-text">Time:</span> {item[1].time}
                            </h5>
                            <h5 className="styled-text">
                                <span className="label-text">Location:</span> {item[1].location}
                            </h5>
                        </div>
                    ) : null
                ))}
            </div>


        )
    }
}
export default Mybooking 