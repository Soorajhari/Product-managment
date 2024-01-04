import { useState } from "react"
import { emailRegex,pswrdRegex, pswrdRule} from "../constants/regex"

export const useValidate=()=>{
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        userName: "",
     
      });
    
      const validate = (user, formType) => {
        let newErrors = { email: "", password: "", userName: "", };
        let isValid = true;
    
        const validateEmail = (email) => {
          return emailRegex.test(email);
        };
    
    
        if (formType === "signup") {
          if (user.name.length < 5) {
            newErrors.name = "Name must be at least 5 characters";
            isValid = false;
          }
    
          if (/\d/.test(user.name)) {
            newErrors.name = "Name must not include numbers";
            isValid = false;
          }
        }
    
        if (!validateEmail(user.email)) {
          newErrors.email = "Invalid email format";
          isValid = false;
        }
    
        if (!pswrdRegex.test(user.password) || !pswrdRule.test(user.password)) {
          newErrors.password =
            "Password must include a character and a special character";
          isValid = false;
        }
    
        if (user.password.length < 6) {
          newErrors.password = "Password must be at least 6 characters";
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      };
    
      const clearError = (error) => {
        setErrors((prev) => {
          return {
            ...prev,
            [error]: "",
          };
        });
      };
    
      return { errors, validate, clearError };
}