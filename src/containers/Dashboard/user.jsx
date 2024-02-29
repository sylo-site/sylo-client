import { useEffect, useState } from "react";
import { CommonHeader } from "../Shared/CommonHeader"
import { useNavigate } from "react-router-dom";

export const UserDashBoard = () =>{
    const [token,setToken]=useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        const token = sessionStorage.getItem("access-token");
        setToken(token)
        if(!token){
          navigate("/")
        }
      },[token,navigate])
    return <>
    { token ? <section>
        <CommonHeader/>
    </section>:null}
    </>
}