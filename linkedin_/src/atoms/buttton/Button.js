import React  from "react";

  function Button ({style,classname,children,handleclick}){

    return (
        <button className={classname} style={style} onClick={handleclick}>{children}</button>
    )
}
export default Button;