import React from 'react';
import { Link } from 'react-router-dom';





const Book = ({title, author, imageCover, description, authorImage, id}) => (    
    <div className="book">      
    <Link style={{ textDecoration: 'none' }} to ={`/BookView/${id}`}>        
    <img src={imageCover} alt={title}/>
   
        <div className="book-info">     
            <h3>{title}</h3>                 
        </div>              
       
        <div className="book-over">
            <h2>Handling</h2>   
            <p2>{description}</p2>
        </div> 
        </Link>
      
    </div>
    
);



export default Book;