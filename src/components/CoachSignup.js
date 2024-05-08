import React,{useState} from 'react';
import validateField from './Validate';
import './CoachSignup.css';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";


const initialFormData={
    name:"",
    age:"",
    password:"",
    confirmPassword:"",
    gender:"",
    speciality:"",


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

        axios.post("http://localhost:8080/coaches", formData)
        .then((response) => {
            setFormData("");
          console.log(response.coaches);
        })
        .catch((err) => {
          console.log("Cant post");
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

    alert(`Form data: \n${dataString}`);
    setFormData(initialFormData);
    setFormErrors({});

    };
    return (
      <>
      <div className="coach-signUp">
        <form id="coach-Signup-form" onSubmit={handleRegister}>
          <h2 className="title">Life Coach Profile</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {/* Checking whether the  formError is set for name textbox, if set displaying the corresponding error message using conditional rendering*/}
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="speciality">Speciality:</label>
            <input
              type="text"
              id="speciality"
              name="speciality"
              value={formData.speciality}
              onChange={handleChange}
            />
            {/* Checking whether the  formError is set for name textbox, if set displaying the corresponding error message using conditional rendering*/}
            {formErrors.speciality && <span className="error">{formErrors.speciality}</span>}
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
            {/* Checking whether the  formError is set for password field, if set displaying the corresponding error message using conditional rendering*/}
            {formErrors.password && (
              <span className="error">{formErrors.password}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {/* Checking whether the  formError is set for confirmPassword field, if set displaying the corresponding error message using conditional rendering*/}
            {formErrors.confirmPassword && (
              <span className="error">{formErrors.confirmPassword}</span>
            )}
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <div className="form-row">
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              <label htmlFor="other">Other</label>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleChange}
              />
            </div>
            {/* Checking whether the  formError is set for gender field, if set displaying the corresponding error message using conditional rendering*/}
            {formErrors.gender && (
              <span className="error">{formErrors.gender}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="age">Country:</label>
            <select
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            >
              <option value="">Select your age</option>
              <option value="21-30">21-30</option>
              <option value="31-40">31-40</option>
              <option value="41_and_above">41 and above</option>
            </select>
            {/* Checking whether the  formError is set for country field, if set, displaying the corresponding error message using conditional rendering*/}
            {formErrors.age && (
              <span className="error">{formErrors.age}</span>
            )}
          </div>
          <div class="text-center"> 
          <button type="submit" className="btn btn-success">Register</button>
          </div>
        </form>
        </div>
        </>
      );
    };
    export default Form;