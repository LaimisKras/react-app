import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">
                    <img src="https://img.freepik.com/premium-vector/home-sweet-home_68166-181.jpg" 
                        alt="" 
                        width="60" 
                        height="48"/>
                </a>
                    <Link className="navbar-brand" to="/home">Home Sweet Home</Link>
                        <button className="navbar-toggler" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#navbarNavAltMarkup" 
                                aria-controls="navbarNavAltMarkup" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;