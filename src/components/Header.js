import React from "react";
import logo from "../logo.svg";
import About from "../pages/About";
import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import Blog from "../pages/Blog";

import "./Header.css";
  import{   BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

 export default function Header() {
      return (
        <Router>
          <nav className="nav">
         
        
        <div className="header-logo">
           <img src={logo} height="30" width="30" className="header-logo" alt="logo"/>
        </div>

        <input type="checkbox" id="checkbox_toggle"/>
          <label for="checkbox_toggle" className="burger"><span className="burger-line"></span></label>
        
        <div className="nav-menu">
          
        
            <Link to="/home" className="link" >Home</Link>
            <Link to="/about" className="link">About us</Link>
            <Link to="/contacts" className="link" >Contacts</Link>
            <Link to="/blog" className="link">Blog</Link>
             </div>
        <form>
            <div className="nav-input">
            <input type="text" placeholder="Search" className="header-input">

            </input>
            <button className="header-button">Search</button>

          </div>  
          
         
        </form>
        
        
     </nav>
            <Routes>
            <Route path="/" element = {<Home/>}/>
                <Route path="/Home" element = {<Home/>}/>
                <Route path="/About" element = {<About/>}/>
                <Route path="/Contacts" element = {<Contacts/>}/>
                <Route path="/Blog" element = {<Blog/>}/>
            </Routes>
       
         
        </Router>

      )
 }

 

