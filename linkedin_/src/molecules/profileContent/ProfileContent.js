import React from "react";
import Button from "../../atoms/buttton";
import Icon from "../../atoms/icon";
import COVERIMG from "./Constants/profileContent.links";
import './ProfileContent.css'
import BUTTON_INFO from "./Constants/buttonInfo";
function ProfileContent({ onEditBtnClick, info }) {
    return (
      
            <div id="Profile" className="profile-container">
                <div className="banner">
                    <img
                        src={COVERIMG}
                        alt="CoverPhoto" className="banner-img">
                    </img>
                    <Button handleclick={onEditBtnClick} classname="p-edit-btn p-btn" id="p-edit-btn">
                        <Icon
                            classname="fa-solid fa-pencil">
                        </Icon>
                    </Button>
                </div>
                <div className="profile-info">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQE0e2QDKx3RyQ/profile-displayphoto-shrink_400_400/B56ZO0f2miGwAg-/0/1733900070357?e=1743638400&v=beta&t=DArS97PHsJeJNeTbeSLn0T4vG1McsrzNxMljPFDbKxc"
                        alt="Profile Picture" className="profile-img">
                    </img>
                    <div className="profile-details">
                        <h2>{info.name}
                            <span
                                className="pronouns">({info.pronouns})
                            </span>
                        </h2>
                        <p className="description">{info.description}</p>
                        <p className="location">{info.location}. <a href="#">Contact info</a></p>
                        <p className="connections"><a href="#">{info.connections}</a></p>
                        <div className="profile-buttons">
                            {BUTTON_INFO.map((item) => (
                                <Button key={item.classname} classname={`${item.classname} `}>{item.placeholder}</Button>
                            ))
                            }
                        </div>
                    </div>
                </div>

            </div>
       
    )
}

export default ProfileContent;