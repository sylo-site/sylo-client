import "./login.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useGetUserToken} from "../../../services/graphql";
import styloLogo from "../../../assets/stylo-logo.png";
import { ToastContainer, toast } from "react-toastify";

export const Login = ({props}) => {

  const navigate = useNavigate()

  const [userDetails, setUserDetails] = useState({
    email:null,
    password:null
  })

  const [variableData,setVariableData] = useState(null)

  const {loading,error,data} = useGetUserToken({variables: variableData})

  const handleChange = (e)=>{
    const {name, value} = e.target
    setUserDetails((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  const handleLogin = (e)=>{
    e.preventDefault()
   setVariableData(userDetails)
  }

  //Redirect
  useEffect(()=>{
    if(data?.getUserToken && !error){
      localStorage.setItem("user", JSON.stringify(data?.getUserToken?.user))
      navigate("/dashboard")
    }else{
      console.log(loading,"error")
      if(!loading &&  (userDetails?.email || userDetails?.password)){
        toast.error("Sorry, Something Went Wrong")
      }
    }
  },[error,data,navigate])

  //If Logged in go to dashboard
  useEffect(()=>{
    const token = sessionStorage.getItem("access-token");
    if(token){
      navigate("/dashboard")
    }
  },[])


  return (
    <section className="parent-container">
    <img className="stylo-logo" src={styloLogo} alt="stylo-logo" />
      <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin} >
        <div className="user-box">
          <input placeholder="Email" onChange={handleChange} type="email" name="email" required />
        </div>
        <div className="user-box">
          <input placeholder="Password" onChange={handleChange} type="password" name="password" required />
        </div>
        <div>
        <h4>New User, <Link to={"/signup"} >Signup</Link></h4>
        <br />
        </div>
        
        <button type="submit">Login</button>
      </form>
    </div>
    <ToastContainer/>
    </section>
  );
};
