
import React from "react";
import Icon from "../../../atoms/icon";
import Input from "../../../atoms/input";
import './NavBarleft.css'
function Navbarleft(){
    return (
        <div className="nav-left">
        <div className="logo">
            <a href="index.html"> 
                <Icon classname="fa-brands fa-linkedin"> </Icon></a>
        </div>
        <div className="searchbar">
            <Icon classname="fa-solid fa-magnifying-glass "></Icon>
            <Input
               type="text"
                name="Search"
                id="Searchbar"
                placeholder="Search" />
        </div>
    </div>
    )
}
export default Navbarleft;