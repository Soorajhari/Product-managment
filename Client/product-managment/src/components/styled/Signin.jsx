import React,{useEffect} from 'react'
import Form from '../shared/Form'
import { useNavigate } from 'react-router-dom'


const Signin = () => {
    const navigate=useNavigate()
    
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
        <Form formType="signin"/>
    </div>
  )
}

export default Signin