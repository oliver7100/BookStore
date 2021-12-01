import React from 'react';




const Book = ({title, author, imageCover, description, authorImage}) => (
    <div className="book">
         <img src={imageCover} alt={title}/>
        <div className="book-info">
            <h3>{title}</h3>           
        </div>
        
        <div className="book-over">
            <h2>Handling</h2>
            <p2>{description}</p2>
        </div>
    </div>
);



export default Book;