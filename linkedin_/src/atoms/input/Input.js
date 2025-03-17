
function Input({ label, Type, value, placeholder, onChange, children,classname }) {
   
 return (
        <>
        {label &&
            <label>
                  {label}:
            </label>
        }
        { Type==='textarea'?<Type className={classname} onChange={onChange} rows="4" cols="5" value={value} type={Type} placeholder={`${placeholder}`}> </Type>
        : <input className={classname} onChange={onChange} value={value} type={Type} placeholder={`${placeholder}`}>
            </input>
    
    }
     {children}
     </>
    )
}
export default Input;