import React from 'react';
import useBooks from '../../hooks/useBooks';
import Book from './Book';

const HomeInventory = () => {
    const [books] = useBooks();

    // const homeBook = books.slice(0,6)
    return (
        
        <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {
                books.slice(0, 6).map(book => <Book
                key={book._id}
                book={book}
                >
                </Book>)
            }
        </div>
    );
};

export default HomeInventory;