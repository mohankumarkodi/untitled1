import React from "react";
import {useFormik} from 'formik';

import './index.css'
 function LoginPage(){
    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit:(values)=>{
            console.log(values)
        },
        validate:(values) =>{
            let errors = {};
            if(!values.username){
                errors.username ="Name Required"
            }
            if(!values.password){
                errors.password ="Password Required"
            }
            return errors;
        }
    })
    return(
        <div  className="align-name">
            <p>please login to be continued</p>
            <form  autoComplete="off" onSubmit={formik.handleSubmit}>
                <div>
                    <p className="disc">Username*</p>
                    <input value={formik.values.username} onChange={formik.handleChange} name="username" id="username" className="input2" type="text"/>
                    {formik.errors.username?<div className="error">{formik.errors.username}</div>:null}
                </div>
                <div>
                    <p className="disc">password*</p>
                    <input value={formik.values.password}  onChange={formik.handleChange} name="password" id="password" className="input2" type="password"/>
                    {formik.errors.password?<div className="error">{formik.errors.password}</div>:null}
                </div>
                <div className="btn-align1">
                    <button type="submit" className="btn">LogIn</button>
                </div>
                
            </form>
            
        </div>
    )
 }
 export default LoginPage;