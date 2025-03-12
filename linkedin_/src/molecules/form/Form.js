import React from "react";
import Input from "../../atoms/input";
import Button from "../../atoms/buttton";
import HeaderCard from "../headerCard";
import { getFields } from "../../utils/sectionUtils";
import { getSection } from "../../utils/sectionUtils";
import './Form.css'
import { useModalContext } from "../../organisms/sectionContainer/SectionContainer";

function Form({sectionType,onCloseBtnClick,onSubmitBtnClick,onFormInputChange,formData,formErrors,onDeleteBtnClick}) {
    const {editingItem}=useModalContext();
    const sectionConfig = getSection(sectionType);
    const sectionFields = getFields(sectionConfig);

    return (
        <div className="modal">
            <div className="modal-content">
                <HeaderCard
                 className="modal-header"
                    Tag="h2"
                    title={editingItem ? `Edit ${sectionType}:` : `Add ${sectionType}:`}
                    handleclick={onCloseBtnClick}
                    classname="fa-solid fa-close"
                    btnstyle={
                        {
                            padding:"0px 0px",
                            margin:"0px 0px"
                        }
                    }
                    style={{
                       padding:"0px 0px",
                        fontWeight: "bold"
                    }} 
                />
                <form className="modal-body" >
                    {sectionFields.map((field) => (
                        
                            <Input
                                key={field.id}
                                label={field.name}
                                className={formErrors[field.id]?"err":""}
                                placeholder={field.placeholder}
                                Type={field.type}
                                value={formData[field.id] || ""}
                                onChange={(e) => onFormInputChange(field.id, e.target.value)}
                                required={field.required}

                            >
                                <span> <p className="error">{formErrors[field.id]}</p></span>
                            </Input>
                        
                    ))}
                </form>
                <div>
                    <Button
                        classname="btn form-btn"
                        handleclick={() => onSubmitBtnClick()}
                        type="submit"
                    >
                        {editingItem ? "Update" : "Add"}
                    </Button>
                    {editingItem && <Button
                        classname="btn"
                        handleclick={() =>onDeleteBtnClick()}
                        type="submit"
                    >
                        Delete
                    </Button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Form;
