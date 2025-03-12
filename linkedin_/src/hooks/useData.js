import { useState } from "react";
import UserData from "../organisms/UserData";

export function useUserData() {
    const [editingItem, setEditingItem] = useState(null);
    const [userData, setUserData] = useState(UserData);

    const sections = [
        { title: "Profile", type: "profile", data: userData.profile},
        { title: "Experience", type: "experience", data: userData.experience},
        { title: "Education", type: "education", data: userData.education},
        { title: "Skills", type: "skills", data: userData.skills},
        { title: "Analytics", type: "analytics", data: userData.analytics},
        { title: "Interests", type: "interests", data: userData.interests},
        { title: "Activity", type: "activity", data:userData.activity},
    ];

    function updateProfile(data) {
        setUserData((prevData) => ({
            ...prevData,
            profile: data,
        }));
    }

    function updateList(type, data) {
        setUserData((prevData) => ({
            ...prevData,
            [type]: prevData[type].map((item) =>
                item.id === data.id ? data : item
            ),
        }));
    }

    function addItem(type, data) {
       
        setUserData((prevData) => ({
            ...prevData,
            [type]: [...prevData[type], data],
        }));
    }

    function handleInfoDelete(type, data) {
        setUserData((prevData) => ({
            ...prevData,
            [type]: prevData[type].filter((item) => item.id !== data.id),
        }));
        handleEditItem(null);
    }

    function handleFormSubmit(type, data) {
        if (type === "profile") {
            updateProfile(data);
        } else if (editingItem) {
            updateList(type, data);
        } else {
            addItem(type, data);
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
