import React from "react";
import './firstpage.css';
import { Link } from "react-router-dom";
import Logo from '../../images/Logo.png';

function Firstpage() {
    return (
        <>
            <div className="homefirst">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="Logo" className="flogo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <Link to='/home'>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                </Link>
                                <Link to='/offer'>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Offers</a>
                                    </li>
                                </Link>
                                <Link to='/package'>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Packages</a>
                                    </li>
                                </Link>
                                <Link to='/login'>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Login</a>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="fcontent">
                    <h1 className="fcontenth1">Start Planning Your Holidays With Us</h1>
                    <Link to='/home'><button className="btn">Explore Now</button></Link>
                </div>
            </div>
        </>
    );
}

export default Firstpage;
