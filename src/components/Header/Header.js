import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='Header'>
            <nav className="navbar navbar-expand-lg navbar-light bg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">
                        <img src="https://cdn.svgporn.com/logos/perl.svg"
                            alt=""
                            width="60"
                            height="48" />
                    </a>
                    <Link className="navbar-brand" to="/home">Programming Republic</Link>
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
                            <Link className="nav-link nav-hov" to="/home">Home</Link>
                            <Link className="nav-link nav-hov" to="/calculator">Calculator</Link>
                            <Link className="nav-link nav-hov" to="/choice">Choice</Link>
                            <Link className="nav-link nav-hov" to="/blogpost">BlogPosts</Link>
                            <Link className="nav-link nav-hov" to="/about">About</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;