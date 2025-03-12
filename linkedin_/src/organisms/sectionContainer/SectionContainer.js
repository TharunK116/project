
import React, { createContext, useState } from "react";
import Section from "../sections/Section";
import { useUserData } from "../../hooks/useData";
import { useContext } from "react";
const ModalContext = createContext();
export function useModalContext() {
    return useContext(ModalContext);
}
function SectionContainer() {
    const {editingItem,handleEditItem,sections,handleInfoDelete,handleFormSubmit}= useUserData();
    const modalActions={
        handleEditItem,
        handleInfoDelete,
        handleFormSubmit,
        editingItem,
    }
    return (
        <ModalContext.Provider value={modalActions}>
        <div className="content">
            {sections.map((section) => (

                <Section
                    key={section.title}
                    title={section.title}
                    type={section.type}
                    onInfoDelete={handleInfoDelete}
                    onInfoSubmit={handleFormSubmit}
                    data={section.data}
                />
            ))}
        </div>
        </ModalContext.Provider>
    );
}

export default SectionContainer;