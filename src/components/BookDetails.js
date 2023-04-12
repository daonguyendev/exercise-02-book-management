import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BookDetails() {
  const BOOK_MANAGEMENT_API = "https://643678688205915d34f4532e.mockapi.io/api";
  const { bookId } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    if (bookId) {
      axios
        .get(`${BOOK_MANAGEMENT_API}/books/${bookId}`)
        .then(res => {
            setBook(res.data);
        })
        .catch(err => {
          throw err;
        });
    }
  }, [bookId]);

  function getBooks() {
    window.location.href = "/";
  }

  function removeBook() {
    if (bookId) {
        axios
        .delete(`${BOOK_MANAGEMENT_API}/books/${bookId}`)
        .then(res => {
            alert(
                `Remove book ${JSON.stringify(
                  res.data
                )} successfully!!!`
              );
              window.location.href = "/";
        })
        .catch(err => {
          throw err;
        });
    }
  }

  return (
    <div>
      <h1>Book Details</h1>
      <p><b>Id:</b> {book.id}</p>
      <p><b>Title:</b> {book.title}</p>
      <p><b>Quantity:</b> {book.quantity}</p>
      <button type="button" onClick={getBooks}>
        Back
      </button>&nbsp;
      <button type="button" onClick={removeBook}>
        Remove
      </button>
    </div>
  );
}

export default BookDetails;