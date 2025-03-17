import { useState } from "react";
import UserData from "../organisms/UserData";
import { useDispatch } from "react-redux";
import { dataAdded, dataUpdated } from "../redux/features/data";
export function useUserData() {
    const [editingItem, setEditingItem] = useState(null);
    const [userData, setUserData] = useState(UserData);
    const dispatch=useDispatch();

    const sections = [
        { title: "Profile", type: "profile", data: userData.profile,headerConfig:userData.profile.headerConfig},
        { title: "Experience", type: "experience", data: userData.experience,headerConfig:userData.experience.headerConfig},
        { title: "Education", type: "education", data: userData.education,headerConfig:userData.education.headerConfig},
        { title: "Skills", type: "skills", data: userData.skills,headerConfig:userData.skills.headerConfig},
        { title: "Analytics", type: "analytics", data: userData.analytics,headerConfig:userData.analytics.headerConfig},
        { title: "Interests", type: "interests", data: userData.interests,headerConfig:userData.interests.headerConfig},
        { title: "Activity", type: "activity", data:userData.activity,headerConfig:userData.activity.headerConfig},
    ];

    function handleInfoDelete(type, data) {
        setUserData((prevData) => ({
            ...prevData,
            [type]: prevData[type].filter((item) => item.id !== data.id),
        }));
        handleEditItem(null);
    }
    function handleFormSubmit(type, data) {
        if (type === "profile") {
            dispatch(dataUpdated({type,item:data}));
        } else if (editingItem) {
           
            dispatch(dataUpdated({type,item:data}));
           
        } else {
           
            dispatch(dataAdded({type,item:data}));
           
        }

        handleEditItem(null);
    }

    function handleEditItem(item) {
       
        setEditingItem(item);
    }
    return {
        editingItem,
        userData,
        sections,
        handleFormSubmit,
        handleEditItem,
        handleInfoDelete,
    };
}
