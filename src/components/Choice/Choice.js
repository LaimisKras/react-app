import React from 'react';
import PropTypes from 'prop-types';
import './Choice.css';
import { Link, Outlet } from 'react-router-dom';

const Choice = () => (
  <>
    <div className="Choice" data-testid="Choice">
      Choice Component
    </div>
    <div className="p-5">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/choice/PVM">
            PVM-Counter
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/choice/ToDo">
            ToDo-List
          </Link>
        </li>
      </ul>
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  </>
);

Choice.propTypes = {};

Choice.defaultProps = {};

export default Choice;
