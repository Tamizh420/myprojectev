import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';






function Map() {
    const [input, setInput] = useState('')
    const [localdata, setLocaldata] = useState([])
    const [locations, setLocations] = useState('')



    const usehandlechange = (event) => {
        setInput({ input: event.target.value });
        setLocations({ locations: event.target.value })
    };
    const usehandlesubmit = async (event) => {
        event.preventDefault();

        console.log(input);
        const response = await axios.post('/apidata', { locations })
            .then((res) => setLocaldata(res.data.local_results))
            .catch((err) => console.log(err))
        console.log(response);

    }




    const getData = (item) => {
        localStorage.setItem('evtitle', item[1].title)
        localStorage.setItem('evaddress', item[1].address)
        localStorage.setItem('evphone', item[1].phone)
        console.log(item[1].title);
        if (item) {
            window.location.href = './admin'
        }

    }



    const url = "https://maps.google.com/maps?q=electric+vechical+charging+stations+all+over+" + input + "&t=&z=10&ie=UTF8&iwloc=&output=embed"


    return (
        <>
            <div className='row' id='evid' style={{ marginTop: '20px' }}>
                <div className='container col'>
                    <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>Electric Vehicle Charging <br /> Stations Location</h3>

                    <center>
                        <form onSubmit={usehandlesubmit}>
                            <div className='row' style={{ width: "460px", justifyContent: "center" }}>
                                <div className='col p-2'>
                                    <input
                                        type="text"
                                        className='form-control rounded-0'
                                        style={{ width: '300px', borderColor: '#ff5a00', borderWidth: '2px' }}
                                        value={input}
                                        name=""
                                        onChange={(e) => { setInput(e.target.value) }}
                                        placeholder="Enter location"
                                    />
                                </div>
                                <div className='col' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <input
                                        type="submit"
                                        className='btn btn-primary'
                                        style={{ backgroundColor: '#ff5a00', border: 'none', fontSize: '16px' }}
                                        value="Search"
                                    />
                                </div>
                            </div>
                        </form>
                    </center>

                    <div className="map-container" style={{ marginTop: '20px' }}>
                        <iframe
                            width="500"
                            height="400"
                            id="osm_canvas"
                            src={url}
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0">
                        </iframe>
                    </div>
                </div>

                <div className='col' style={{ overflow: "auto", height: "550px", marginTop: '50px' }}>
                    {(localdata ? <>

                        {Object.entries(localdata).map((item, key) => (
                            <> <div key={item.id} className='station-card' style={{ marginBottom: '15px' }}>
                                <form style={{ fontSize: "15px" }}>
                                    <div className="station-info" onClick={() => getData(item)} style={{ backgroundColor: "#fff", padding: '15px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                                        <img
                                            src={item[1].thumbnail}
                                            alt="station-thumbnail"
                                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                                        />
                                        <strong><p style={{ color: "#ff5a00", fontSize: '18px', marginTop: '10px' }}>{item[1].title}</p></strong>
                                        <p><strong>Type:</strong> {item[1].type}</p>
                                        <p><strong>Address:</strong> {item[1].address}</p>
                                        <p><strong>Phone:</strong> {item[1].phone}</p>
                                        <p><strong>Hours:</strong> {item[1].hours}</p>
                                        <p><strong>Rating:</strong> {item[1].rating}</p>
                                    </div>
                                </form>
                            </div></>)
                        )}


                    </> : <>Start </>)}
                </div>
            </div>


        </>

    )

}
export default Map
