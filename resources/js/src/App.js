import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";

import AddBook from "./components/books/AddBook";
import { Book } from "./components/books/Book";
import AddStudent from "./components/students/AddStudent";
import AllStudents from "./components/students/AllStudents";
import IssueBook from "./components/books/IssueBook";
import IssuedBooks from "./components/books/IssuedBooks";
import ReturnBook from "./components/books/ReturnBook";
import BookReport from "./components/books/BookReport";
import Settings from "./components/Settings";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route component={Home} exact path="/" />
                    <Route component={Book} path="/book" />
                    <Route component={AddStudent} path="/addStudent" />
                    <Route component={AllStudents} path="/allStudents" />
                    <Route component={AddBook} path="/addBook" />
                    <Route component={IssueBook} path="/issueBook" />
                    <Route component={IssuedBooks} path="/issuedBook" />
                    <Route component={ReturnBook} path="/returnBook" />
                    <Route component={BookReport} path="/bookReport" />
                    <Route component={Settings} path="/settings" />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
