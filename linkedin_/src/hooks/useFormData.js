import { useState, useEffect } from "react";

export function useFormData( editingItem, sectionConfig, fieldInfo) {
    function initialData(editingItem) {
        return sectionConfig.fieldIds.reduce((acc, fieldId) => {
            const fieldConfig = fieldInfo.find((item)=>item.id===fieldId);
          
            if (!fieldConfig) return acc;
            return {
                ...acc,
                [fieldConfig.id]: editingItem ? editingItem[fieldConfig.name] : "",
            };
        }, {});
    }

    const [formData, setFormData] = useState(initialData(editingItem));

    useEffect(() => {
        if (editingItem != null) {
            setFormData(editingItem);
        }
    }, [editingItem]);

    function handleChange(key, value) {
        setFormData((prevData) => ({
            ...prevData,
            
            [key]: value,
        }));
    }

    return { formData, setFormData, handleChange };
}
