import React, { useState } from "react";
import './loginsignup.css'
const loginsignup = () => {
    const [action,setAction]= useState("Login");
    return(
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
                 </div>
<div className="inputs">
    {action==="Login"?<div></div>:<div className="input">
<input type="text" placeholder="Name"/>
</div>}
 <div className="input">
<input type="email" placeholder="Email Id"/>
</div>
<div className="input">
<input type="password" placeholder="password"/>
</div>
</div>
{action==="Sign up"?<div></div>:<div className="forgot-password">Forget password <span>Click here</span></div>}
<div className="submit-container">
<div className={action==="login"?" submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
<div className={action==="Sign up"?"submit gray":"submit"} onClick={()=> {setAction("Login")}}>Login</div>
</div>
</div>
 )
}
export default loginsignup;