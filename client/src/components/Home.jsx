import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {


    const [userdata, setUserdata] = useState([]);
    // console.log(userdata);

    const getData = async (e) => {

        const res = await fetch('http://localhost:8003/getdata', {
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
    

    const deleteUser = async (id) => {
        const res2 =  await fetch(`http://localhost:8003/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const deleteData = await res2.json();
        console.log(deleteData);

        if (res2.status === 404 || !deleteData) {
            console.log("Error 404");
        }
        else {
            console.log("Data deleted success!");
            getData();
        }
    }

    return (
        <div className="container mt-5">
            {/* Add user button */}
            <div className="add-btn">
                <NavLink to='/register' className='btn btn-primary'>
                    Add User
                </NavLink>
            </div>
            {/* Table */}
            <table class="table">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Job</th>
                        <th scope="col">Number</th>
                        <th scope="col">Functions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userdata.map((element, id) => {
                            return (
                                <>
                                <tr>
                        <th scope="row">{id + 1}</th>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.work}</td>
                        <td>{element.mobile}</td>
                        <td className='d-flex justify-content-between'>
                            <NavLink to={`view/${element._id}`}><button className='btn btn-success'>View</button></NavLink>
                            <NavLink to={`edit/${element._id}`}><button className='btn btn-primary'>Edit</button></NavLink>
                            <button onClick={() => deleteUser(element._id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                                </>
                            )
                        })
                    }

                    
                </tbody>
            </table>
        </div>

    )
}

export default Home