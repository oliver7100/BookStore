import React, { useEffect, useState} from "react";
import Book from './Components/Book'
import './index.css';
import Slides from './Components/Slides'
import Header from './Components/Header'
import 'react-slideshow-image/dist/styles.css';

var URL = "/Books";

function App() {


  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const SEARCH_API = "/Books/(search)?title=";
  const SEARCH_API_GENRE = "/Books/(search)?genre=";

  useEffect(()  => {
    getBooks(URL)
  }, []);
  
  const getBooks = (API) =>{   
    

    fetch(API)
    .then(res => res.json())
    .then(data => {
   
     setBooks(data);

    });
  }

    return (
      <>          


    <Header></Header>
{/*}

    <Slides></Slides>
    {*/} 



<div className="book-container">
   
   {books.length > 0 && books.map((book) =>
   <Book key={book.id} {...book} />)} </div>

     </>
      );
    }
    
    export default App;