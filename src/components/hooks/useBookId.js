import { useEffect, useState } from "react";


const useBookId = bookId => {
    const [book, setBook] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/books/${bookId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [bookId]);
    return [book];
}

export default useBookId;