import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ReturnBook extends Component {
    render() {
        return (
            <div className="card mb-2">
                <div className="card-header">Return book</div>
                <div className="card-body">
                    <form>
                        <label htmlFor="studentisbn">Student ISBN</label>
                        <input
                            id="studentisbn"
                            type="numeric"
                            className="form-control"
                            aria-describedby="isbnHelp"
                            placeholder="0-9500000-x-x"
                        />
                        <small id="isbnHelp" className="form-text text-muted">
                            * Scan form ISBN scanner
                        </small>
                    </form>
                    <hr />
                    <div className="table-responsive">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Student Name</th>
                                    <th>Book Name</th>
                                    <th>Initial Date</th>
                                    <th>Today's Date</th>
                                    <th>Total</th>
                                    <th>Penalty</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ram</td>
                                    <td>Computer</td>
                                    <td>2020/01/4</td>
                                    <td>2020/01/4</td>
                                    <td>1 day(s)</td>
                                    <td>
                                        <span className="badge badge-success">
                                            None
                                        </span>
                                    </td>
                                    <td>
                                        <div className="btn-group">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Accept Book
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-warning"
                                            >
                                                Re-Issue Book
                                            </button>
                                            <Link
                                                to="#"
                                                className="btn btn-secondary"
                                            >
                                                Reject Book
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Ram</td>
                                    <td>Computer</td>
                                    <td>2020/01/4</td>
                                    <td>2020/01/4</td>
                                    <td>1 day(s)</td>
                                    <td>
                                        <span className="badge badge-success">
                                            None
                                        </span>
                                    </td>
                                    <td>
                                        <div className="btn-group">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Accept Book
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-warning"
                                            >
                                                Re-Issue Book
                                            </button>
                                            <Link
                                                to="#"
                                                className="btn btn-secondary"
                                            >
                                                Reject Book
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Ram</td>
                                    <td>Computer</td>
                                    <td>2020/01/4</td>
                                    <td>2020/01/4</td>
                                    <td>1 day(s)</td>
                                    <td>
                                        <span className="badge badge-success">
                                            None
                                        </span>
                                    </td>
                                    <td>
                                        <div className="btn-group">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Accept Book
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-warning"
                                            >
                                                Re-Issue Book
                                            </button>
                                            <Link
                                                to="#"
                                                className="btn btn-secondary"
                                            >
                                                Reject Book
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
