import React, { useState} from "react";
import './header.css';
import { useNavigate } from 'react-router-dom';


const Header = () =>{
  

  
  const navigate = useNavigate();

  function MyForm() {


    const [SearchTerm, setSearchTerm] = useState("");
  
    return (
      <form onSubmit={submitted}>
        <label>
          <input
            placeholder="Søg efter titel..."
            type="text" 
            value={SearchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </form>
    )

function submitted(){
  console.log({SearchTerm});
  navigate('/Search/' + SearchTerm);
}


  }

  

      return(

      
    <>

<div class="topnav">
  <a class="active" href="/">Hjem</a>
  <a href="/genre/Fantasy">Fantasy</a>
  <a href="/genre/kogebog">Kogebøger</a>
  <a href="/genre/biografi">Biografier</a>
  <a href="/genre/krimi">Krimier</a>
  <a href="#/cart">Cart</a>
  <a id="Login" href="/Login">Login</a>
  <div class="search-container">
  {MyForm()}


  </div>
</div>

  


</>


      )

}


export default Header;