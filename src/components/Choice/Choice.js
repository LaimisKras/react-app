import React from 'react';
import './Choice.css';
import { NavLink, Outlet } from 'react-router-dom';

const Choice = () => (
  <>
    <div className="Choice" data-testid="Choice">
    </div>
    <div className="p-5">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}  to="/choice/PVM">
            PVM-Counter
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}  to="/choice/ToDo">
            ToDo-List
          </NavLink>
        </li>
      </ul>
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  </>
);


export default Choice;