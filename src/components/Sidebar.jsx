import React from 'react'
import papasmurf from '../assets/papasmurf.png';

const Sidebar = () => {
  return (
    <div
      className="bg-dark text-white vh-100 p-3 d-flex flex-column"
      id="sidebar"
      style={{ maxWidth: '250px' }}
    >
      <div className="mb-4">
        <img src={papasmurf} alt="Papa Smurf Logo" className="img-fluid" style={{ width: "40px", height: "70px" }} />
      </div>
        <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Users</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Tasks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Settings</a>
        </li>
      </ul>
      <div className="mt-auto pb-3">
        <p className="mb-1">Username</p>
        <button className="btn btn-primary w-100">Login</button>
      </div>
    </div>
  )
}

export default Sidebar