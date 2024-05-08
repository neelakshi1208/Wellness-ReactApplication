const validateField=(name,value,formData)=>{
    switch (name){
        case "name":
            if(value.length===0){
                return "Name is required";
            }
            if(value.length<3){
                return "Name should be atleast 3 characters long";
            }
            return "";
        case "password":
            if(!value){
                return "password is required";                }
            if(value.length<5|| value.length>10){
                return "password should have 5 to 10 characters";
                    
                }
            return "";

        case "confirm password":
            if(!value){
                return "Confirm password is required";
            }
            if(value!==formData.password){
                return "Passwords do not match";
                }
            return "";
        case "gender":
            if(!value){
                return "Gender is required";
            }
            return "";
        case "age":
            if(!value){
                return "Age is required";
            }
            if(value<20){
                return "Age should be between 20 and 100 years";
            }
            return "";
        case "id":
            if(!value){
                return "id is required";
            }
            return "";
        case "mobile":
            if(!value){
                return "Mobile number is required";
            }
            if(value.length!==10){
                return "Mobile number should be 10 digits";
            }
            return "";
        case "speciality":
            if(!value){
                return "Speciality should be specified";
            }
            return "";
        case "pincode":
            if(!value){
                return "pincode is required";
            }
            if(value.length!==6){
                return "pincode should be 6 digits";
            }
            return "";
        case "state":
            if(!value){
                return "state is required";
            }
            return "";
        case "country":
            if(!value){
                return "country is required";
            }
            return "";
        case "city":
            if(!value){
                return "city is required";
            }
            return "";
            
            

                      
            

            

    }
};
export default validateField;