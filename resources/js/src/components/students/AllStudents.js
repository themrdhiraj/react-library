import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AllStudents extends Component {
    render() {
        return (
            <div className="card mb-2">
                <div className="card-header">
                    All students
                    <Link
                        to="/addStudent"
                        className="btn btn-sm btn-info float-right"
                    >
                        <i className="fa fa-plus"></i> Add Student
                    </Link>
                </div>
                <div className="card-body">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ISBN</th>
                                <th>Name</th>
                                <th>Book taken?</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>0-9500000-x-x</td>
                                <td>Ram</td>
                                <td>
                                    <span className="badge badge-info">
                                        Yes
                                    </span>
                                </td>
                                <td>
                                    <div className="btn-group">
                                        <button className="btn btn-primary">
                                            <i className="fa fa-edit"></i> Edit
                                        </button>
                                        <button className="btn btn-info">
                                            <i className="fa fa-eye"></i> View
                                        </button>
                                        <button className="btn btn-secondary">
                                            <i className="fa fa-trash"></i>{" "}
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>0-9500000-x-x</td>
                                <td>Ram</td>
                                <td>
                                    <span className="badge badge-dark">No</span>
                                </td>
                                <td>
                                    <div className="btn-group">
                                        <button className="btn btn-primary">
                                            <i className="fa fa-edit"></i> Edit
                                        </button>
                                        <button className="btn btn-info">
                                            <i className="fa fa-eye"></i> View
                                        </button>
                                        <button className="btn btn-secondary">
                                            <i className="fa fa-trash"></i>{" "}
                                            Delete
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
