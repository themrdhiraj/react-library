import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddBook extends Component {
    render() {
        return (
            <div className="card mb-2">
                <div className="card-header">Add New Book</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="isbn">Book ISBN</label>
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

                        <div className="form-group">
                            <label htmlFor="bookName">Book Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="bookName"
                                placeholder="Computer"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="bookDetails">Book Details</label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="bookDetails"
                                placeholder="Book details"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="bookAuthor">Author</label>
                            <input
                                type="text"
                                className="form-control"
                                id="bookAuthor"
                                placeholder="Ram"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="bookPublication">
                                Book Publication
                            </label>
                            <select
                                id="bookPublication"
                                className="form-control"
                            >
                                <option>apple</option>
                                <option>apple</option>
                                <option>apple</option>
                                <option>apple</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="department">Department</label>
                            <select id="department" className="form-control">
                                <option>apple</option>
                                <option>apple</option>
                                <option>apple</option>
                                <option>apple</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                placeholder="500"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input
                                type="number"
                                className="form-control"
                                id="quantity"
                                placeholder="50"
                            />
                        </div>

                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary">
                                Add Book
                            </button>
                            <Link to="/book" className="btn btn-secondary">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
