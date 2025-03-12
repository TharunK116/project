
import Icon from "../../../atoms/icon/index";
import NAVBAR_ITEMS from "../../Constants/Navbar_Items";
import React from "react";

function NavbarRight(){
    return (
        <div className="nav-right">
<ul>
    {NAVBAR_ITEMS.map((item, index) => (
        <li key={index} >
            <a href={item.href}>
                {item.imgSrc ? (
                    <img src={item.imgSrc} alt="profile_pic" className="menu-png" id="profile" />
                ) : (
                    <Icon classname={`fa-solid ${item.icon} icon`}></Icon>
                )}
                <span>{item.label}</span>
            </a>
        </li>
    ))}
</ul>
</div>
    )
}

export default NavbarRight;
