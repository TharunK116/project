import { useState } from "react";

export function useModal(handleEdit) {
    const [isModalOpen,  setisModalOpen] = useState(false);
    
    function  handleAddBtnClick() {
        setisModalOpen(true);
    }

    function handleModalClose() {
        setisModalOpen(false);
        handleEdit(null);
    }

    function handleEditBtnClick(item) {
        setisModalOpen(true);
        handleEdit(item);
    }

    return { isModalOpen, handleAddBtnClick, handleModalClose, handleEditBtnClick};
}
