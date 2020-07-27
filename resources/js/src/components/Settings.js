import React, { Component } from "react";
import Penalty from "./Penalty";
import Department from "./settings/Department";

export default class Settings extends Component {
    render() {
        return (
            <>
                <div className="row mb-2">
                    <Department />
                    <Publication />
                    <Penalty />
                </div>
            </>
        );
    }
}
