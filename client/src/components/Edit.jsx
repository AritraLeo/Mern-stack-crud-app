import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';



const Edit = () => {


    const history = useNavigate();

    const { id } = useParams("");

    const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: ""
})

const setdata = (e) => {
    const { name, value } = e.target;
    setINP((preval) => {
        return {
            ...preval,
            [name]: value
        }
    })
    }
    
    

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
            setINP(data);
            console.log("Data get success!");
        }
    }

    useEffect(() => {
        getData();
    }, [])
    

    const updateUser = async (e) => { 
        e.preventDefault();

        const { name, email, age, mobile, work, add, desc } = inpval;

        const res2 =  await fetch(`http://localhost:8003/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, age, mobile, work, add, desc 
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 404 || !data2) {
            console.log("Error 404");
        }
        else {
            console.log("Data updated success!");
            history('/');
        }

    }


    return (
        <>
            <NavLink to='/'>HOME</NavLink>
            <form>
                {/* Name */}
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputPassword1" />
                </div>
                <br />


                {/* Email */}
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <br />


                {/* Age */}
                <div class="form-group">
                    <label for="exampleInputPassword1">Age</label>
                    <input type="number" value={inpval.age} onChange={setdata} name="age" class="form-control" id="exampleInputPassword1" />
                </div>
                <br />


                {/* Mobile */}
                <div class="form-group">
                    <label for="exampleInputPassword1">Mobile</label>
                    <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1" />
                </div>
                <br />


                {/* Work */}
                <div class="form-group">
                    <label for="exampleInputPassword1">Work</label>
                    <input type="text" value={inpval.work} onChange={setdata} name="work" class="form-control" id="exampleInputPassword1" />
                </div>
                <br />

                {/* Address */}
                <div class="form-group">
                    <label for="exampleInputPassword1">Address</label>
                    <input type="text" value={inpval.add} onChange={setdata} name="add" class="form-control" id="exampleInputPassword1" />
                </div>
                <br />


                {/* Desc */}
                <div class="form-group">
                    <label for="exampleInputPassword1">Desc</label>
                    <input type="text" value={inpval.desc} onChange={setdata} name="desc" class="form-control" id="exampleInputPassword1" />
                </div>
                <br />


                <button type="submit" onClick={updateUser} class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Edit