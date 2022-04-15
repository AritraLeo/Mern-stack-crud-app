import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

const Details = () => {

    const [userdata, setUserdata] = useState([]);
    console.log(userdata);

    const { id } = useParams("");

        const getData = async () => {

        const res = await fetch(`http://localhost:8003/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) {
            console.log("Error 404");
        }
        else {
            setUserdata(data);
            console.log("Data get success!");
        }
    }

    useEffect(() => {
        getData();
    }, [])
    

return (
    <div className='container mt-4 '>
        <div className="d-flex justify-content-end">
        <NavLink to={`/edit/${userdata._id}`}><button className='btn btn-primary'>Edit</button></NavLink>
        <button className='btn btn-danger'>Delete</button>
        </div>
        <h1>Name - {userdata.name}</h1>
        <h1>email - {userdata.email}</h1>
        <h1>age - {userdata.age}</h1>
        <h1>mobile - {userdata.mobile}</h1>
        <h1>work - {userdata.work}</h1>
        <h1>add - {userdata.add}</h1>
        <h1>desc - {userdata.desc}</h1>
    </div>
)
}

export default Details