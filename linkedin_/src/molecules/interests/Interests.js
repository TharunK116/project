import React, { Fragment, useState } from "react"
import CONTENT from "./Constants/Content";
import './Interests.css'
import Button from "../../atoms/buttton";
import HeaderCard from '../headerCard'
import Icon from "../../atoms/icon";

function Interests({title,sectionContent,headerConfig}) {
   
    const [specific, setspecific] = useState(null);
    const[follow,setfollow]=useState('Follow');
    function handleType(id) {
        setspecific(id);
    }
    function handleFollow(){
        setfollow((prev)=>{
            if(prev==="Follow"){
                return 'Following';
            }
            return 'Follow';
        })
    }
        const selectedContent = sectionContent.find((item) => item.type === specific);
        const content = selectedContent?selectedContent.items:[];

    return (
    <> 
       <HeaderCard headerConfig={headerConfig} ></HeaderCard>
        <div id="Interests"  className="interests">
            <div className="types" >
                {sectionContent.map((item) => (
                    
                    <Button 
                        key={item.type}
                        handlebtnClick={() => handleType(item.type)}
                        btnClass={specific === item.type ? "highlight":"bt"}
                        style={{
                            borderRadius:"0px",
                        }}
                    >
                        {item.type}
                    </Button>
                    
                ))}
                </div>


            <div id="people" className="tab-content">
                {content.map((item) => (
                    <Fragment
                        key={item.name}
                    >
                        <img
                            src={item.logo}
                            alt="Company Logo" className="logo" />

                        <div className="company-info">
                            <h3 className="company-name">{item.name}</h3>
                            <p>{item.info}</p>
                            <Button handlebtnClick={handleFollow} btnClass="btn-following"><Icon classname={follow==='Following'?"fa-solid fa-check":"fa-solid fa-plus"}></Icon>{follow}</Button>
                        </div>
                    </Fragment>
                ))
                }

            </div>


        </div>
        </>
    )

}

export default Interests;

