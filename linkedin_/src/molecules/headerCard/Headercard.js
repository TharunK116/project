import React from "react";
import Button from "../../atoms/buttton";
import Title from "../../atoms/title";
import Icon from "../../atoms/icon";
import './HeaderCard.css'
export default function HeaderCard({ headerClass,style,btnstyle,Tag, title, classname, handleclick, children}) {

    return (
        <div className={`header-card ${headerClass}`} style={style}>
            <Title Tag={Tag}>{title}</Title>
            {handleclick && <Button  style={btnstyle} handleclick={handleclick}>
                {classname &&
                    <Icon
                        classname={classname}
                    >
                    </Icon>}
                
            </Button>
            }
            {children}
        </div>
    )


}