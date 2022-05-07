import { useEffect, useState } from "react";


const useBookId = id => {
    const [book, setBook] = useState({});

    useEffect(() => {
        // const url = `https://aqueous-forest-29360.herokuapp.com/books/${id}`;
        fetch(`https://aqueous-forest-29360.herokuapp.com/books/${id}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [id]);
    return [book];
}

export default useBookId;