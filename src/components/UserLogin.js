import React,{useState} from 'react';
import validateField from './Validate';
import './UserLogin.css';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";


const initialFormData={
    id:"",
    password:"",

};
const Form =()=>{
    const [formData,setFormData]=useState(initialFormData);
    const [formErrors,setFormErrors]=useState(initialFormData);
    const handleChange=(event)=>{
        var fieldValue;
        const {name,value,type}=event.target;
        if (type==="radio"){
            fieldValue=value;
        }
        else{
            fieldValue=value.trim();
        }
        setFormData({ ...formData,[name]:fieldValue});
        const error=validateField(name,fieldValue,formData);
        setFormErrors({...formErrors,[name]:error});


    };
    const handleRegister=(e)=>{
        e.preventDefault();
        axios.get("http://localhost:8080/users/?id='+formData.id+'&password='formData.password")
    .then((response) => {
        console.log(response.id);
        console.log(response.password);
      }).catch((err) => {
        console.log("Cant get");
      });

        
        const newFormErrors={};
        Object.keys(formData).forEach((fieldName)=>{
        newFormErrors[fieldName]=validateField(
            fieldName,
            formData[fieldName],
            formData
        );
    });
    setFormErrors(newFormErrors);
    if(Object.values(newFormErrors).some((error)=>error)){
        return;
    }
    const dataString =Object.keys(formData).map((fieldName)=>`${fieldName}:${formData[fieldName]}`).join("\n");

    };
    return (
        <>
        <div className='login-form'>
        <form id="coach-Signup-form" onSubmit={handleRegister}>
          <h2 className="title">User Login</h2>
          <div className="form-group">
            <label htmlFor="id">UserId:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
           
            {formErrors.id && <span className="error">{formErrors.id}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            
            {formErrors.password && (
              <span className="error">{formErrors.password}</span>
            )}
          </div>
          <div className="text-center"> 
          <button type="submit" className="btn btn-success">Login</button>
          </div>
        </form>
        </div>

        </>
      );
    };
    export default Form;