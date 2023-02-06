import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([]);


    const addBook = (title, author) => {

        setBooks([...books, { title: title, author: author, id: uuidv4() }])

    };
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))

    };


    const editBook = (id, title = "he") => {

        const editData = books.map(book => (book.id === id) ?

            { id, title, author: book.author } : book);

        setBooks(editData)

    }


    return (

        <BookContext.Provider value={{ books, addBook, removeBook, editBook }}>
            {props.children}
        </BookContext.Provider>

    )
}

export default BookContextProvider;