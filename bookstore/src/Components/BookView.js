import React,{useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import Header from './Header'
import CartContext from "../context/cart/CartContext";


const BookView = () => {   
  const {addToCart} = useContext(CartContext);


const [book, setBook] = useState([]);

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
    })
})


    return (
<>

<Header></Header>



<div class="container">
  <div class="images">
    
    <img id="imageCover" src={book.imageCover} alt="" />
 
  </div>

  <div class="product">
    <p className="uppercase">{book.author}</p>
    <h1 class="uppercase">{book.title}</h1>      
    <h2>{book.price} DKK</h2>

    <img id="author" src={book.authorImage} alt=""></img>

    <p class="desc"> {book.description}</p>
    <div class="buttons">
     <button
          className='add'
          onClick={() => addToCart(book)}
        >
          Add to basket
        </button>
     
    </div>
  </div>
</div>




</>
    );
}

export default BookView;