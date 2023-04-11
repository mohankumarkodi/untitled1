import React from "react";
import Button from 'react-bootstrap/Button';

import './index.css'
 function SignUp(){
    return(
        <div  className="align-name">
            <p>please signup to be continued</p>
            <form>
                <div>
                    <p className="disc">Username*</p>
                    <input name="userName" className="input" type="text"/>
                </div>
                <div>
                    <p className="disc">password*</p>
                    <input className="input" name="password" type="password"/>
                </div>
                <div className="btn-align1">
                    <button className="btn" type="submit">SignUp</button>
                </div>
            </form>
        </div>
    )
 }
 export default SignUp;