import { useEffect, useState } from "react";


const useBookId = id => {
    const [book, setBook] = useState({});

    useEffect(() => {
        // const url = `http://localhost:5000/books/${id}`;
        fetch(`http://localhost:5000/books/${id}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [id]);
    return [book];
}

export default useBookId;