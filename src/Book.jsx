import React from 'react';
import './styles/Book.css';

const Book = ({ index, book, onToggleStatus }) => {
    return (
        <li className="book-item">
            <span>{index + 1}</span>
            <span>{book.title}</span>
            <span>{book.author}</span>
            <span>{book.status === 'Checked Out' ? book.dueDate : '-'}</span>
            <span>{book.status}</span>
            <button onClick={() => onToggleStatus(index)}>Toggle Status</button>
        </li>
    );
};

export default Book;
