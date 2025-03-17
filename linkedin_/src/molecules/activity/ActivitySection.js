import React from "react";
import './ActivitySection.css';
export default function ActivitySection({ info }) {
   
    return (
        <>
            <div className="activity-content">
                {info.map((item) => (
                    <div key={item.id} className="activity-item">
                        <span className="activity-title">
                           <strong>Tharun Kumar</strong> posted:
                        </span>
                        <p className="activity-post">
                            "{item.POST}"
                        </p>
                       
                    </div>
                ))}
            </div>

            
        </>
    );
}
