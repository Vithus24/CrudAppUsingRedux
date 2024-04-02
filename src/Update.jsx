import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';

function Update() {
    const {id} =useParams();
    const users =useSelector((state)=>state.users);
    const existingUser =users.filter(f=> f.id==id);
    const {name,email}=existingUser[0];
    const [uname,setName]=useState(name)
    const [uemail,setEmail]=useState(email)

    const dispatch =useDispatch();
    const navigate =useNavigate()

    const handleUpdate=(event)=>{
        event.preventDefault();
        dispatch(updateUser({id:id, name:uname, email:uemail}))
       navigate('/')
    }




  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center" style={{ opacity: 0.8 }}>
      <div
        className="w-50 border bg-dark text-white p-5 "
        style={{ borderRadius: "20px" }}
      >
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
                value={uname}
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
              value={uemail}
              onChange={e => setEmail(e.target.value)}
  
            />
          </div>
          <button type="submit" className="btn btn-primary">
           Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update