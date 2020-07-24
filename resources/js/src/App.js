import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

import AddBook from "./components/books/AddBook";
import AddStudent from "./components/students/AddStudent";
import IssueBook from "./components/books/IssueBook";
import ReturnBook from "./components/books/ReturnBook";
import BookReport from "./components/books/BookReport";
import StudentReport from "./components/students/StudentReport";
import Penalty from "./components/Penalty";
import Settings from "./components/Settings";

function App() {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-auto">
                        <Switch>
                            <Route component={Home} exact path="/" />
                            <Route component={AddBook} path="/addBook" />
                            <Route component={AddStudent} path="/addStudent" />
                            <Route component={IssueBook} path="/issueBook" />
                            <Route component={ReturnBook} path="/returnBook" />
                            <Route component={BookReport} path="/bookReport" />
                            <Route
                                component={StudentReport}
                                path="/studentReport"
                            />
                            <Route component={Penalty} path="/penalty" />
                            <Route component={Settings} path="/settings" />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
