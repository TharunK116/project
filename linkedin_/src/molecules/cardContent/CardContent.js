import React from "react";
import Button from "../../atoms/buttton/Button";
import { getFields } from "../../utils/sectionUtils";
import { getSection } from "../../utils/sectionUtils";
import Icon from "../../atoms/icon";
import ExperienceSection from "./experienceSection";
import EducationSection from "./educationSection";
import './CardContent.css';
function CardContent({...props}) {
    const { sectionType, data, onEditBtnClick }=props;
    const sectionConfig = getSection(sectionType);
    const sectionFields = getFields(sectionConfig);

    const CardContentMapping = {
        experience: <ExperienceSection info={data} />,
        education: <EducationSection info={data} />,
        default: sectionFields.map((sectionField) => (
            <p key={sectionField.name} className={`${sectionType}-${sectionField}`}>
                <strong>{sectionField.name}: </strong>
                {data && data[sectionField.id]}
            </p>
        ))
    }
    return (
        <div className={`${sectionType}-item`}>
            {CardContentMapping[sectionType] || CardContentMapping.default}
            <div className="edit-btn-container">
                <Button handlebtnClick={onEditBtnClick} className={`edit-${sectionType}-btn`}>
                    <Icon iconClass="fa-solid fa-pencil"></Icon>
                </Button>
            </div>
        </div>
    );
}

export default CardContent;
