import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "./App";
import BookView from "./Components/BookView";
import Search from "./Components/Search";
import Genre from "./Components/Genre";
import Login from "./Components/Login";
import ReactDOM from "react-dom";
import React from "react";
import CartState from "./context/cart/CartState";


const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/BookView/:id" element={<BookView />}/>
        <Route path="/search/:title" element={<Search />}/>
        <Route path="/genre/:genre" element={<Genre />}/>
        <Route path="/Login/" element={<Login />}/>

        <Route
        path="*"
        element={
            <main style={{padding: "1rem"}}>
                <p>Nothing to be seen here</p>
            </main>
        }

        />
    </Routes>
    <CartState>
        <App/> 
    </CartState>
    </BrowserRouter>
    </React.StrictMode>,
            rootElement

);
