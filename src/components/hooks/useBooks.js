import { useEffect, useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // const url = `https://bookpile-server-side.onrender.com/books`;
    fetch(`https://bookpile-server-side.onrender.com/books`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return [books, setBooks];
};

export default useBooks;
