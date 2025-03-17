import React from "react";
import Button from "../../atoms/buttton";
import Title from "../../atoms/title";
import Icon from "../../atoms/icon";
import './HeaderCard.css'
export default function HeaderCard({ headerConfig,headerClass,handlebtnClick, children}) {
    console.log(headerConfig);
    return (
        <div className={`header-card ${headerClass}`}>
            <Title Tag={headerConfig.tag}>{headerConfig.title}</Title>
            {headerConfig.showButton&& <Button  handlebtnClick={handlebtnClick}>
                    <Icon
                        iconClass={headerConfig.iconClass}
                    >
                    </Icon>
            
            </Button>
            }
            {children}
        </div>
    )

}