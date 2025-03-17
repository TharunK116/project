const SECTIONS = [
    {
        title: "Profile",
        type: "profile",
        fieldIds: ["PROFILE_PIC", "NAME", "CONTACT", "CONNECTIONS","DESCRIPTION","PRONOUNS"],
        headerConfig:{
            showButton:"true",
            iconClass:"fa-solid fa-pencil",
            title:"Profile",
            tag:"h2",
        }
    },
    {
        title: "Experience",
        type: "experience",
        fieldIds: ["COMPANY", "POSITION", "DESCRIPTION", "START_DATE", "END_DATE", "LOCATION"],
        headerConfig:{
            showButton:"true",
            iconClass:"fa-solid fa-add",
            title:"Experience",
            tag:"h2",
        }
    },
    {
        title: "Education",
        type: "education",
        fieldIds: ["COLLEGE_NAME", "DEGREE", "BRANCH", "START_DATE", "END_DATE", "LOCATION"],
        headerConfig:{
            showButton:"true",
            iconClass:"fa-solid fa-add",
            title:"Education",
            tag:"h2",
        }
    },
    {
        title: "Skills",
        type: "skills",
        fieldIds: ["SKILL_NAME", "PROFICIENCY"],
        headerConfig:{
            showButton:"true",
            iconClass:"fa-solid fa-add",
            title:"Skills",
            tag:"h2",
        }
    },
    {
        title: "Analytics",
        type: "analytics",
        fieldIds: ["METRIC", "VALUE"],
        headerConfig:{
            showButton:"false",
            iconClass:"",
            title:"Analytics",
            tag:"h2",
        }
    },
    {
        title: "Interests",
        type: "interests",
        fieldIds: ["SKILL_NAME", "PROFICIENCY"],
        headerConfig:{
            showButton:"false",
            title:"Interests",
            tag:"h2",
        }
    },
    {
        title: "Activity",
        type: "activity",
        fieldIds:["POST"],
        headerConfig:{
            showButton:"true",
            title:"Activity",
            tag:"h2",
        }
       
    },
];

export default SECTIONS;