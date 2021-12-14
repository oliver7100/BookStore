import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Book from './Book'
import Header from './Header'
import Styles from './bookview.css'


export default() => {   


const [book, setBook] = useState([]);
const [loading, setLoading] = useState(true);

//Parameter for single fetch.
const { id } = useParams();
const bookApiID = `/Books/${id}`;




useEffect(() => {
    fetch(bookApiID)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setBook(data);
        console.log(book.title)
        //Loading is set to False, when the data has finished being fetched.
        setLoading(false);
    })
})


    return (
<>

<Header></Header>



<div class="container">
  <div class="images">
    
    <img id="imageCover" src={book.imageCover} />
 
  </div>

  <div class="product">
    <p className="uppercase">{book.author}</p>
    <h1 class="uppercase">{book.title}</h1>      
    <h2>{book.price} DKK</h2>

    <img id="author" src={book.authorImage}></img>

    <p class="desc"> {book.description}</p>
    <div class="buttons">
      <button class="add">Tilføj til kurv</button>
     
    </div>
  </div>
</div>




</>
    );
}