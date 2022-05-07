import { useEffect, useState } from "react"

const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // const url = `https://aqueous-forest-29360.herokuapp.com/books`;
        fetch(`https://aqueous-forest-29360.herokuapp.com/books`)
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [])

    return [books, setBooks];

}

export default useBooks;