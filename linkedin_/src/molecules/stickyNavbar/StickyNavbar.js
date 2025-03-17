import React, { useState } from "react";
import { Link } from "react-scroll"; 
import SECTIONS from "../../utils/Constants/sections";
import './StickyNavbar.css'
function StickyNavbar() {
    const [activeSection, setActiveSection] = useState("");
    return (
        <div className="sticky-nav-container">
            <nav className="sticky-navbar">
                <ul>
                    {SECTIONS.map((item) => (
                        <a  key={item.title} className={activeSection === item.title ? "active-link" : ""}>
                        <li    >
                            <Link
                                to={item.title}
                                smooth={true} 
                                duration={500} 
                                 offset={-500}
                                spy={true} 
                                onSetActive={() => setActiveSection(item.title)}
                            >
                                {item.title}
                            </Link>
                        </li>
                        </a>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default StickyNavbar;
