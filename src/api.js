import React, { useState, useEffect } from "react";
import axios from 'axios';

export const instance = axios.create({
    baseURL: "http://localhost:3001 ",
});


export default function Post() {
    const [postdata, setdata] = useState([{}])
    useEffect(() => {
        fetch("apidata").then(res => { return res.json() })
            .then(data => { setdata(data) })
            .catch(err => console.log(err))
        console.log(postdata)
    }, [])

    return (
        <>
            {Object.entries(postdata).map((post) => {
                return (
                    <>
                        <p>{post[1].title}</p>
                        <p>{post[1].hours}</p>
                    </>
                )
            })}
        </>
    )

}



