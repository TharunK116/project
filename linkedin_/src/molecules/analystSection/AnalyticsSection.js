import React from "react";
import HeaderCard from "../headerCard/Headercard";
import Button from "../../atoms/buttton";
import Icon from "../../atoms/icon";
import './AnalystSection.css'
function AnalyticsSection({ info }) {
    return (
        <>
            <HeaderCard title={"Analytics"}>
            
            </HeaderCard>
            <span className='analytics-sub'><i className="fa-solid fa-eye"></i>Private to you</span>   
            <div id="Analytics" className="analytics-detail ">

                {info.map((info) => (
                    <div key={info.icon} className="analytics-item">
                        <div className="analytics-logo">
                            <Button>
                                <Icon classname={info.icon}></Icon>

                            </Button>
                        </div>
                        <div className="analytics-description">
                            {info.header}
                            <p>{info.content}</p>

                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}
export default AnalyticsSection;