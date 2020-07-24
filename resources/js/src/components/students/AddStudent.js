import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddStudent extends Component {
    render() {
        return (
            <div className="card mb-2">
                <div className="card-header">Add New Student</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="isbn">Student ISBN</label>
                            <input
                                type="number"
                                className="form-control"
                                id="isbn"
                                autoFocus
                                aria-describedby="isbnHelp"
                                placeholder="0-9500000-x-x"
                            />
                            <small
                                id="isbnHelp"
                                className="form-text text-muted"
                            >
                                * Scan form ISBN scanner
                            </small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bookName">Student Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="bookName"
                                placeholder="Ram"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="department">Department</label>
                            <select id="department" className="form-control">
                                <option>apple</option>
                                <option>apple</option>
                                <option>apple</option>
                                <option>apple</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact">Student Contact No.</label>
                            <input
                                type="numeric"
                                className="form-control"
                                id="contact"
                                placeholder="98XXXXXXXX"
                            />
                        </div>

                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary">
                                Add Student
                            </button>
                            <Link
                                to="/allStudents"
                                className="btn btn-secondary"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
