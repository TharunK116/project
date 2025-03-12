import React from "react";
import Button from "../../atoms/buttton/Button";
import { getFields } from "../../utils/sectionUtils";
import { getSection } from "../../utils/sectionUtils";
import './CardContent.css';
import ExperienceSection from "./experienceSection";
import EducationSection from "./educationSection";
function CardContent({ type, data, onEditBtnClick }) {
    const sectionConfig = getSection(type);
    const fields = getFields(sectionConfig);
    
 const CardContentMapping= {
    experience: <ExperienceSection info={data} />,
    education: <EducationSection info={data} />,
    default: fields.map((field) => (
           <p key={field.name} className={`${type}-${field}`}>
               <strong>{field.name}: </strong>
               {data && data[field.id]}
           </p>
       ))
}
    return (
        <div className={`${type}-item`}>
            {CardContentMapping[type]||CardContentMapping.default}
            <div className="edit-btn-container">
                <Button handleclick={onEditBtnClick} className={`edit-${type}-btn`}>
                    <i className="fa-solid fa-pencil"></i>
                </Button>
            </div>
        </div>
    );
}

export default CardContent;
