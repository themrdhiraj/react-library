import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BookReport extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Books Report
                    <button className="btn btn-warning btn-sm float-right">
                        <i className="fa fa-print"></i> Print report
                    </button>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            {" "}
                            <div className="form-group col">
                                <label htmlFor="isbn">
                                    Search by Book ISBN
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
                                    Search by Student ISBN
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
