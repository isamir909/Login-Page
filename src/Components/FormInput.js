import "./FormInput.css";

import { useState } from "react";

const FormInput=(props)=>{
      const [focused,setFocused]=useState(false);
      const {label,errorMessage,onChange,id,...inputProps}=props;
     

      const handelFocus=(e)=>{
            setFocused(true)
      }
return (
   <div className="formInput">
         <label>{label}</label>
         <input {...inputProps} onChange={onChange} onBlur={handelFocus} focused={focused.toString()}/>
          <span>{errorMessage}</span>
   </div>
)
}

export default FormInput