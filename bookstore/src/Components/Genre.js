import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Book from './Book'
import Header from './Header'


const Genre = () => {
const [books, setBooks] = useState([]);

//Parameter for single fetch.
const { genre } = useParams();
const bookApiID = `/Books/(search)?genre=${genre}`;

useEffect(() => {
    fetch(bookApiID)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setBooks(data);
        //Loading is set to False, when the data has finished being fetched.
    })
})


    return (
<>

<Header></Header>
<div className="book-container">
   
   {books.length > 0 && books.map((book) =>
   <Book key={book.id} {...book} />)} </div>


</>
    );
}

export default Genre;