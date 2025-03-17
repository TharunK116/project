import React  from "react";
import NavbarRight from "./atoms/navBarRight/index";
import Navbarleft from "./atoms/navBarLeft/index";
import './navBar.css'
function Navbar(){
    return  (
        <nav className="navbar">
        <div className="nav-container">
           <Navbarleft/>
            <NavbarRight/>
        </div>
    </nav>




    )
}

export default Navbar;