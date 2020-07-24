import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="btn-group-vertical btn-block btn-lg">
            <Link to="/" className="btn btn-outline-info mb-2 active">
                Home
            </Link>
            <Link to="/addBook" className="btn btn-outline-info mb-2">
                Add Books
            </Link>
            <Link to="/addStudent" className="btn btn-outline-info mb-2">
                Add Student
            </Link>
            <Link to="/issueBook" className="btn btn-outline-info mb-2">
                Issuse Book
            </Link>
            <Link to="/returnBook" className="btn btn-outline-info mb-2">
                Return Book
            </Link>

            <Link to="/bookReport" className="btn btn-outline-info mb-2">
                Book Report
            </Link>
            <Link to="/studentReport" className="btn btn-outline-info mb-2">
                Student Report
            </Link>
            <Link to="/penalty" className="btn btn-outline-info mb-2">
                Penalty
            </Link>
            <Link to="/settings" className="btn btn-outline-info mb-2">
                Settings
            </Link>
            <Link to="/logout" className="btn btn-secondary">
                Logout
            </Link>
        </div>
    );
}
