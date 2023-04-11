import  React from 'react';
import './index.css';

function Profile(){
    return(
        <div className={"margin"}>
            <div className={"aligning"} >
                <h1 className={"profile_name"}>Profile</h1>
                <div className={"aligning"}>
                    <form className={"form"}>
                        <p className={"names"}>First Name</p>
                        <input className={"input5"} type={"text"} placeholder={"Enter name"}/>
                        <p className={"names"}>Mobile Number</p>
                        <input  className={"input5"}  type={"number number-input"} placeholder={"Enter Mobile"}/>
                        <p  className={"names"}>Email</p>
                        <input  className={"input5"}  type={"email"} placeholder={"Enter Email"}/>
                        < hr/>
                        <div className='left-align'>
                            <div className={"btn-align2"}>
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
export default Profile;