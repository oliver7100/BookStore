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
       



  const bookRenderer = books.map((book) =>(


    <>
<div className="book-container">
    <div className="book">
      <div className="book-info">
      <h3>{book.title}</h3>  
      </div>

    <div>
    <img src={book.imageCover} alt="img" ></img>
    </div>
    <div className="book-over">
            <h2>Handling  </h2>
            <p>{book.description}</p>
        </div>
    </div>   
    </div>
    </>
  ))
      


    return (
      <>      


      <div>{bookRenderer}</div>


        {/*}
       <div>
       <pre>{JSON.stringify(books, null, 2)} </pre>
       </div>
         

    {*/}
     


     </>
      );
    }
    
    export default App;
    


   