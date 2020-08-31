import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

function Navbar() {
    const location = useLocation();
return (

    <header className="header-container">
        <section className="header">
            <div className="logo-box">
                <h2 className="logo">Google Books</h2>
            </div>
            <input type="checkbox" id="chk"></input>
            <label for="chk" className="show-menu-btn">
                <i className="fas fa-ellipsis-h"></i>
            </label>

            <ul className="menu">
                <li className="text-menu">
                    <Link className="link"
                    to="/"
                    className={location.pathname === "/" ? "nav-link active" : "nav-link"}
                    >
                    Search
                    </Link>
                </li>
                <li className="text-menu">
                    <Link className="link"
                    to="saved"
                    className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                    >
                    Saved
                    </Link>
                </li>
                <label for="chk" className="hide-menu-btn">
                    <i className="fas fa-times-circle"></i>
                </label> 
            </ul>
        </section>
    </header>
)
}

export default Navbar;