/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Navigation/navbar.css'
import Logo from '../Navigation/IECLogo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="h-100 w-100 pb-5" style={{ boxsizing: 'border-box', backgroundColor: '#2a2a2a', }}>
            <div className="container-xxl mx-auto p-0 position-relative header-2-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a href="#">
                        <img
                            style={{ marginRight: '0.75rem', width: '7.5rem' }}
                            src={Logo}
                            alt="logo-iec"
                        />
                    </a>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#targetModal-item"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="modal-item modal fade"
                        id="targetModal-item"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="targetModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div
                                className="modal-content border-0"
                                style={{ backgroundcolor: '#2a2a2a' }}
                            >
                                <div
                                    className="modal-header border-0"
                                    style={{ padding: '2rem', paddingBottom: '0' }}
                                >
                                    <Link className="modal-title" id="targetModalLabel" to="/">
                                        <img
                                            style={{ marginTop: '0.5rem', width: '50%' }}
                                            src="IECLogo.png"
                                            alt=""
                                        />
                                    </Link>
                                    <button
                                        type="button"
                                        className="close btn-close text-white"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div
                                    className="modal-body"
                                    style={{ padding: '2rem', paddingTop: 0, paddingBottom: 0 }}
                                >
                                    <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">Who is IEC</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/news" style={{ color: '#e7e7e8' }}
                                            >The Hunts</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Enquiry</a>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="modal-footer border-0 gap-3"
                                    style={{ padding: '2rem', paddingTop: '0.75rem' }}
                                >
                                    <button className="btn btn-default btn-no-fill">Log In</button>
                                    <button className="btn btn-fill border-0">Join The Hunt</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>Who is IEC</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to='/news' style={{ color: '#e7e7e8' }}
                                >The Hunts</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Enquiry</a>
                            </li>
                        </ul>
                        <div className="gap-3">
                            <button className="btn btn-fill border-0">Join The Hunt</button>
                            <button className="btn btn-default btn-no-fill">Log In</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
