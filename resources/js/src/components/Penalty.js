import React, { Component } from "react";

export default class Penalty extends Component {
    render() {
        return (
            <div className="col-6">
                <div className="card">
                    <div className="card-header">Penalty</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="penalty">
                                    Total Penalty Day
                                </label>
                                <input
                                    className="form-control"
                                    defaultValue="5"
                                    aria-describedby="helper"
                                    placeholder="10"
                                />
                                <small
                                    id="helper"
                                    className="form-text text-muted"
                                >
                                    * Days student can keep books
                                </small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="penalty">Penalty Fine</label>
                                <input
                                    className="form-control"
                                    defaultValue="10"
                                    aria-describedby="help"
                                    placeholder="10"
                                />
                                <small
                                    id="help"
                                    className="form-text text-muted"
                                >
                                    * Charges after penalty (per)day
                                </small>
                            </div>
                            <button className="btn btn-primary">
                                Update Penalty
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
