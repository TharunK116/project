import React from "react";
import StickyNavbar from "../../molecules/stickyNavbar/index";
import SectionContainer from "../sectionContainer/SectionContainer";
import './MainPage.css'

function Mainpage() {
    return (
        <div className="ProfilePage">
            <StickyNavbar />
            <div className="container">
                <SectionContainer />
            </div>
        </div>
    )
}
export default Mainpage;