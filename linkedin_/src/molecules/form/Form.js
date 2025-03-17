import React from "react";
import Input from "../../atoms/input";
import Button from "../../atoms/buttton";
import HeaderCard from "../headerCard";
import { getFields } from "../../utils/sectionUtils";
import { getSection } from "../../utils/sectionUtils";
import './Form.css'
import { useModalContext } from "../../organisms/sectionContainer/SectionContainer";

function Form({...props}) {
  const  {sectionType,onCloseBtnClick,onSubmitBtnClick,onFormInputChange,formData,formErrors,onDeleteBtnClick}=props;
    const {editingItem}=useModalContext();
    const sectionConfig = getSection(sectionType);
    const sectionFields = getFields(sectionConfig);
    
    return (
        <div className="modal">
            <div className="modal-content">
                <HeaderCard
                    headerClass="modal-header"
                    handlebtnClick={onCloseBtnClick}
                    headerConfig={
                        {   tag:"h2",
                            showButton:"true",
                            iconClass:"fa-solid fa-close",
                            title:editingItem ? ` Edit ${sectionType}:` : ` Add ${sectionType}:`,
                        }
                    }
                    
                    
                    iconClass="fa-solid fa-close"
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
                        btnClass="btn form-btn"
                        handlebtnClick={() => onSubmitBtnClick()}
                        type="submit"
                    >
                        {editingItem ? "Update" : "Add"}
                    </Button>
                    {editingItem && <Button
                        btnClass="btn"
                        handlebtnClick={() =>onDeleteBtnClick()}
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
