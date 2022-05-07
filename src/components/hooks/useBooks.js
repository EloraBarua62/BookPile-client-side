import { useEffect, useState } from "react"

const useBooks = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        // const url = `http://localhost:5000/books`;
        fetch(`http://localhost:5000/books`)
        .then(response => response.json())
        .then(data => setBooks(data))
    },[])

    return [books,setBooks];
    
}

export default useBooks;