import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class IssueBook extends Component {
    render() {
        return (
            <div className="card mb-2">
                <div className="card-header">
                    Issue a book{" "}
                    <small>(The date will calculate automatically.)</small>
                    <strong className="float-right">
                        The last due date will be <u>2020-01-05</u>
                        {/* Comes from db */}
                    </strong>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            {" "}
                            <div className="form-group col">
                                <label htmlFor="isbn">
                                    Book ISBN{" "}
                                    <small className="text-danger">
                                        *required
                                    </small>
                                </label>
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
                            <div className="form-group col">
                                <label htmlFor="isbnstudent">
                                    Student ISBN{" "}
                                    <small className="text-danger">
                                        *required
                                    </small>
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="isbnstudent"
                                    aria-describedby="isbnHelpStudent"
                                    placeholder="0-9500000-x-x"
                                />
                                <small
                                    id="isbnHelpStudent"
                                    className="form-text text-muted"
                                >
                                    * Scan form ISBN scanner
                                </small>
                            </div>
                        </div>
                    </form>
                    <hr />
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Book Name</th>
                                <th>Student Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Computer</td>
                                <td>Ram</td>
                                <td>
                                    <div className="btn-group">
                                        <button className="btn btn-primary">
                                            <i className="fa fa-check"></i>{" "}
                                            Issue Book
                                        </button>
                                        <button className="btn btn-secondary">
                                            <i className="fa fa-times"></i>{" "}
                                            Cancel
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
