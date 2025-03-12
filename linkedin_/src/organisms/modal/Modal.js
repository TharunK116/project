import React from "react";
import Form from "../../molecules/form";
import fieldInfo from "../../utils/Constants/fields";
import { useValidation } from "../../hooks/useValidation";
import { useFormData } from "../../hooks/useFormData";
import { getSection } from "../../utils/sectionUtils";
import { createNewData } from "../../utils/addIdUtils";
import { useModalContext } from "../sectionContainer/SectionContainer";

function Modal(props) {
   
    const {type,onModalClose}=props;
    const {handleInfoDelete,handleFormSubmit,editingItem}=useModalContext();
    const sectionConfig = getSection(type);
    const { formData, handleChange } = useFormData( editingItem, sectionConfig, fieldInfo);
    const { formErrors, setFormErrors, handleFormValidation, handleInputValidation } = useValidation(sectionConfig, fieldInfo);
   
    function handleFormInputChange(key,value) {
        handleInputValidation(key, value);
        handleChange(key, value);
    }
    function addData(formData){
        const newData = editingItem ? formData : createNewData(formData);
        return newData;
    }
   function  onFormSubmit() { 
        const newErrors =handleFormValidation(formData);
        if (Object.keys(newErrors).length > 0) {
            setFormErrors(newErrors);
            return;
        }
        const newData = addData(formData);
        handleFormSubmit(type, newData);
        onModalClose();
    }
    function onDeleteItem() {
        handleInfoDelete(type, formData);
        onModalClose();
    }

    return (
       
           (
            <Form
                sectionType={type}
                formData={formData}
                formErrors={formErrors}
                onCloseBtnClick={onModalClose}
                onFormInputChange={handleFormInputChange}
                onDeleteBtnClick={onDeleteItem}
                onSubmitBtnClick={onFormSubmit}
            >
            </Form>
          
        )
    );
}

export default Modal;
