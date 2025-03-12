import React from "react";
import './ActivitySection.css';
import HeaderCard from "../headerCard";
import { Button } from "react-scroll";

export default function ActivitySection({ info, title, handleclick }) {
   
    return (
        <>
            <HeaderCard classname='fa-solid fa-add' title={title}>
                <Button className="resources profile-btn" onClick={handleclick}>
                    Create Post
                </Button>
            </HeaderCard>

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
