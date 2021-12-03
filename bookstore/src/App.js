import React, { useEffect, useState} from "react";
import Book from './Components/Book'
import './App.css';


var URL = "/Books";

function App() {
  const [books, setBooks] = useState([]);
  

  useEffect(()  => {
    getBooks(URL)
  }, []);
  
  const getBooks = (API) =>{   
    

    fetch(API)
    .then(res => res.json())
    .then(data => {
      console.log(data);
     setBooks(data);
    });
  }
       

    return (
      <>          

<div className="book-container">
   
   {books.length > 0 && books.map((book) =>
   <Book key={book.id} {...book} />)} </div>

     </>
      );
    }
    
    export default App;