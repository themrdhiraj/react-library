import React, { Component } from "react";
import axios from "axios";
import { Loading } from "../Loading";

export default class Department extends Component {
    constructor(props) {
        super(props);

        this.state = {
            departmentName: "",
            departments: [],
            loading: true,
            message: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios
            .get(`http://library.me/api/departments`)
            .then(res => {
                console.log(res);
                this.setState({
                    departments: res.data,
                    loading: false
                });
            })
            .catch(err => console.log(err));
    }

    // componentDidUpdate(prevProp, prevState) {
    //     console.log("called", prevState);
    //     if (prevState === this.state.departments) {
    //         axios
    //             .get(`http://library.me/api/departments`)
    //             .then(res => {
    //                 console.log(res);
    //                 this.setState({
    //                     departments: res.data,
    //                     loading: false
    //                 });
    //             })
    //             .catch(err => console.log(err));
    //     }
    // }

    onChange(e) {
        this.setState({
            departmentName: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const departmentName = {
            departmentName: this.state.departmentName
        };
        axios
            .post("http://library.me/api/department", departmentName)
            .then(res => {
                console.log(res.data);
                this.setState({
                    departmentName: ""
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <div className="col-6">
                    <div className="card mb-2">
                        <div className="card-header">Add Department</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="department">
                                        Department Name
                                    </label>
                                    <input
                                        name="departmentName"
                                        type="text"
                                        className="form-control"
                                        id="department"
                                        placeholder="Department Name Here"
                                        value={this.state.departmentName}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </form>
                            <hr />
                            {this.state.loading ? <Loading /> : ""}
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Department</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.departments.map(department => (
                                        <tr key={department.id}>
                                            <td>{department.id}</td>
                                            <td>{department.departmentName}</td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        axios
                                                            .delete(
                                                                `http://library.me/api/department/${department.id}`
                                                            )
                                                            .then(res =>
                                                                console.log(
                                                                    "deleted"
                                                                )
                                                            )
                                                            .catch(err => {
                                                                console.log(
                                                                    err
                                                                );
                                                            })
                                                    }
                                                    className="btn btn-dark"
                                                >
                                                    <i className="fa fa-trash"></i>{" "}
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
