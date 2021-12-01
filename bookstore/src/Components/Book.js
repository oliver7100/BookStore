import React from 'react';


/*
const Book = ({id, title, descripton, imageCover}) => {
    
    const thumbnail = imageCover ? imageCover: null;

    <div className="books">
    <img src={imageCover} alt=""/>

    </div> 
    };


*/




const Book = ({id, title, authorImage, descripton, imageCover}) => (
    <div className="movie">
         <img src={imageCover} alt={title}/>
        <div className="book-info">
            <h3>{title}</h3>
          
        </div>
        
        <div className="book-over">
            <h2>Beskrivelse</h2>
            <p2>{descripton}</p2>
        </div>
    </div>
);




export default Book;