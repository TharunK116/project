import React  from "react";

  function Button ({style,btnClass,children,handlebtnClick}){

    return (
        <button className={btnClass} style={style} onClick={handlebtnClick}>{children}</button>
    )
}
export default Button;