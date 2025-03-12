import SECTIONS from "./Constants/sections";
import FIELD_INFO from "./Constants/fields";

export function getSection(type){
    return  SECTIONS.find((sec) => sec.type === type);
 }
 export function getFields(sectionConfig){
    return  sectionConfig.fieldIds.map((fieldId) => 
        
        FIELD_INFO.find((field) => field.id === fieldId)
    );
    
}