import React from "react";
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav className="navbar bg-light border-bottom border-info border-2 shadow">
            <div className="container-fluid">
                <a className="navbar-brand fw-bolder text-info" href="#">Homedecore</a>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link link-dark fw-semibold">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list-product" className="nav-link link-dark fw-semibold">List Product</Link>
                    </li><li className="nav-item">
                        <a className="nav-link link-dark fw-semibold">Contact</a>
                    </li>
                </ul>
            </div>
    </nav>
    );
}