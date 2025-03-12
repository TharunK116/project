import React from "react";

function Title({children,Tag="h1"}){
    return (
        <Tag>{children}</Tag>
    )
}
export default Title;