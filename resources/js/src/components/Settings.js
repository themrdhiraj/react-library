import React, { Component } from "react";
import Penalty from "./Penalty";

export default class Settings extends Component {
    render() {
        return (
            <div className="row mb-2">
                <div className="col-6">
                    <div className="card mb-2">
                        <div className="card-header">Add Department</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="department">
                                        Department Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="department"
                                        placeholder="Department Name Here"
                                    />
                                </div>
                            </form>
                            <hr />
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Department</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Physics</td>
                                        <td>
                                            <button className="btn btn-dark">
                                                <i className="fa fa-trash"></i>{" "}
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Physics</td>
                                        <td>
                                            <button className="btn btn-dark">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Physics</td>
                                        <td>
                                            <button className="btn btn-dark">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card mb-2">
                        <div className="card-header">Add Book Publication</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="publication">
                                        Book Publication Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="publication"
                                        placeholder="Publication Name Here"
                                    />
                                </div>
                            </form>
                            <hr />
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Publication</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Physics</td>
                                        <td>
                                            <button className="btn btn-dark">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Physics</td>
                                        <td>
                                            <button className="btn btn-dark">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Physics</td>
                                        <td>
                                            <button className="btn btn-dark">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Penalty />
            </div>
        );
    }
}
