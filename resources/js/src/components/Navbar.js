import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2 sticky-top">
            <Link className="navbar-brand" to="#">
                Library
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            id="book"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Books
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="book">
                            <Link className="dropdown-item" to="/book">
                                All Books
                            </Link>
                            <Link className="dropdown-item" to="/addBook">
                                Add Books
                            </Link>
                            <hr />
                            <Link className="dropdown-item" to="/issuedBook">
                                Issued Books
                            </Link>
                        </div>
                    </li>
                    {/* Student */}
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            id="student"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Students
                        </Link>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="student"
                        >
                            <Link className="dropdown-item" to="/allStudents">
                                All Students
                            </Link>
                            <Link className="dropdown-item" to="/addStudent">
                                Add Students
                            </Link>
                        </div>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/issueBook">
                            Issue Book
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/returnBook">
                            Return Book
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bookReport">
                            Reports
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/settings">
                            Settings
                        </Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};
