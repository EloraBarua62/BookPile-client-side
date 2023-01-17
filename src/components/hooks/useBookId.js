import { useEffect, useState } from "react";

const useBookId = (id) => {
  const [book, setBook] = useState({});

  useEffect(() => {
    // const url = `https://bookpile-server-side.onrender.com/books/${id}`;
    fetch(`https://bookpile-server-side.onrender.com/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);
  return [book];
};

export default useBookId;
