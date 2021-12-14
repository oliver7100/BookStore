import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Book from './Book'
import Header from './Header'


export default() => {
const [books, setBooks] = useState([]);
const [loading, setLoading] = useState(true);

//Parameter for single fetch.
const { title } = useParams();
const bookApiID = `/Books/(search)?title=${title}`;


useEffect(() => {
    fetch(bookApiID)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setBooks(data);
        //Loading is set to False, when the data has finished being fetched.
        setLoading(false);
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