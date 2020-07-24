import React from "react";
import { Link } from "react-router-dom";

export const Book = () => {
    return (
        <div className="card">
            <div className="card-header">
                All available books in Library
                <Link to="/addBook" className="btn btn-sm btn-info float-right">
                    <i className="fa fa-plus"></i> Add Books
                </Link>
            </div>
            <div className="card-body">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Computer</td>
                            <td>10</td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-primary">
                                        <i className="fa fa-edit"></i> Edit
                                    </button>
                                    <button className="btn btn-secondary">
                                        <i className="fa fa-trash"></i> Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
