import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {

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

  const addData = async (e) => {

    e.preventDefault();

    const { name, email, age, mobile, work, add, desc } = inpval;

    const res = await fetch('http://localhost:8003/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, age, mobile, work, add, desc
      })
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("Error");
    }
    else
      alert("Data added");
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


        <button type="submit" onClick={addData} class="btn btn-primary">Submit</button>
      </form>
    </>
  )
}


export default Register