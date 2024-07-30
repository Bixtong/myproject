import React, { useState } from 'react';
import Book from './Book';
import SearchFilter from './SearchFilter';
import './styles/Books.css';


const generateDueDate = () => {
    const today = new Date();
    const dueDate = new Date(today.getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000);
    return dueDate.toISOString().split('T')[0];
};


const authors = ['John', 'Jane', 'Mike', 'Lisa'];
const statuses = ['Checked Out', 'Available'];
const booksData = Array.from({ length: 10 }, (_, index) => {
    const isCheckedOut = index < 6;
    return {
        title: `Book ${index + 1}`,
        author: authors[Math.floor(Math.random() * authors.length)],
        dueDate: isCheckedOut ? generateDueDate() : '',
        status: isCheckedOut ? 'Checked Out' : 'Available'
    };
});

const Books = () => {
    const [books, setBooks] = useState(booksData);
    const [filteredBooks, setFilteredBooks] = useState(books);


    const toggleStatus = (index) => {
        setBooks(books.map((book, i) =>
            i === index
                ? {
                    ...book,
                    status: book.status === 'Checked Out' ? 'Available' : 'Checked Out',
                    dueDate: book.status === 'Checked Out' ? '' : generateDueDate()
                }
                : book
        ));
    };

    return (
        <div className="books-container">
            <SearchFilter books={books} setFilteredBooks={setFilteredBooks} />
            <ul className="books-list">
                <li className="books-header">
                    <strong>No.</strong> | <strong>Title</strong> | <strong>Author</strong> | <strong>Due Date</strong> | <strong>Status</strong> | <strong>Action</strong>
                </li>
                {filteredBooks.map((book, index) => (
                    <Book key={index} index={index} book={book} onToggleStatus={toggleStatus} />
                ))}
            </ul>
        </div>
    );
};

export default Books;
