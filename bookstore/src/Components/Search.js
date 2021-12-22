import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Book from './Book'
import Header from './Header'


export default() => {
const [books, setBooks] = useState([]);
const [loading, setLoading] = useState(true);
const [resultat, setResultat]  = useState(true);

//Parameter for single fetch.
const { title } = useParams();
const bookApiID = `/Books/(search)?title=${title}`;

var isDataEmpty = "";

useEffect(() => {
    fetch(bookApiID)
    .then(res => res.json())
    .then(data => {
        

        
        setBooks(data);        

        if(data[0] === undefined)
        {
            setResultat("Intet resultat...")            
        }
        else{
            setResultat("");
        }
      
        //Loading is set to False, when the data has finished being fetched.
        setLoading(false);
    })
})



    return (
<>



<Header></Header>
<div className="book-container">

    <h1 id="resultat" >{resultat}</h1>
   
   {books.length > 0 && books.map((book) =>
   <Book key={book.id} {...book} />)} </div>


</>
    );
}