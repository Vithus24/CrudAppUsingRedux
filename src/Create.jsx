import React, { useState } from "react";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Create() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const users =useSelector((state)=>state.users);


    const dispatch =useDispatch();
    const navigate =useNavigate()


    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(addUser({id: users[users.length-1].id+1, name, email}))
        navigate('/')
    }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center" style={{ opacity: 0.8 }}>
      <div
        className="w-50 border bg-dark text-white p-5 "
        style={{ borderRadius: "20px" }}
      >
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
