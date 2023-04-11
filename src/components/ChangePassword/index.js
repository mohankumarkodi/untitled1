import  React from 'react';
import './index.css';

function ChangePassword(){
    return(
        <div className={"margin"}>
            <div className={"aligning"} >
                <h1 className={"profile_name"}>Change Password</h1>
                < hr/>
                <div className={"aligning"}>
                    <form className={"form"}>
                        <p className={"names"}>Current password</p>
                        <input className={"input1"} type={"password"} placeholder={"Enter current password"}/>
                        <p className={"names"}>Enter New Password</p>
                        <input  className={"input1"}  type={"password"} placeholder={"Enter New Password"}/>
                        <p  className={"names"}>Re-Enter New Password</p>
                        <input  className={"input1"}  type={"password"} placeholder={"Re-Enter New Password"}/>
                        < hr/>
                        <div className='left-align'>
                            <div className={"btn-align3"}>
                                <button className={"buttons btn-cancel"} type ="button">cancel</button>
                                <button className={"buttons btn-save"} type ="button">save</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ChangePassword;