import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BookList() {
    const BOOK_MANAGEMENT_API = "https://643678688205915d34f4532e.mockapi.io/api";
    const { bookId } = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get(`${BOOK_MANAGEMENT_API}/books`)
            .then(res => {
                setBooks(res.data);
            })
            .catch(err => {
                throw err;
            });
    }, [books, bookId]);

    function handleCreate() {
        window.location.href = "/book/add";
    }

    return (
        <div>
            <h1>Books</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th colSpan={2}>
                            <button type="button" onClick={handleCreate}>
                                Create
                            </button>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id} </td>
                            <td>{book.title} </td>
                            <td>{book.quantity} </td>   
                            <td>
                                <a href={`/book/${book.id}`}>Details</a> 
                            </td>
                            <td>
                                <a href={`/book/edit/${book.id}`}>Edit</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
}

export default BookList;

