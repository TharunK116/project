
import React, { createContext, useState } from "react";
import Section from "../sections/Section";
import { useUserData } from "../../hooks/useUserData";
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
                    sectionTitle={section.title}
                    sectionType={section.type}
                    onInfoDelete={handleInfoDelete}
                    onInfoSubmit={handleFormSubmit}
                    headerConfig={section.headerConfig}
                   
                />
            ))}
        </div>
        </ModalContext.Provider>
    );
}

export default SectionContainer;