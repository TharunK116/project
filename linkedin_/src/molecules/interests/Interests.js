import React, { Fragment, useState } from "react"
import CONTENT from "./Constants/Content";
import './Interests.css'
import Button from "../../atoms/buttton";
import HeaderCard from '../headerCard'
import Icon from "../../atoms/icon";
function Interests({title,info}) {
   const CONTENT=info;
    let contentd = [];
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


    if (specific != null) {
        const content = CONTENT.find((item) => item.type === specific);
        contentd = content.items;
    }


    return (
    <> 
       <HeaderCard title={title} ></HeaderCard>
        <div id="Interests"  className="interests">
            <div className="types" >
                {CONTENT.map((item) => (
                    
                    <Button 
                        key={item.type}
                        handleclick={() => handleType(item.type)}
                        classname={specific === item.type ? "highlight":"bt"}
                        style={{
                            borderRadius:"0px",
                        }}
                    >
                        {item.type}
                    </Button>
                    
                ))}
                </div>


            <div id="people" className="tab-content">

                {contentd.map((item) => (
                    <Fragment
                        key={item.name}
                    >
                        <img
                            src={item.logo}
                            alt="Company Logo" className="logo" />

                        <div className="company-info">
                            <h3 className="company-name">{item.name}</h3>
                            <p>{item.info}</p>
                            <Button handleclick={handleFollow} classname="btn-following"><Icon classname={follow==='Following'?"fa-solid fa-check":"fa-solid fa-plus"}></Icon>{follow}</Button>
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

