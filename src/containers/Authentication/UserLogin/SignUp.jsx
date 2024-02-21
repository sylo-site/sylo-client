import React, { useEffect, useState } from 'react';
import './signup.css'; // Import CSS file
import {useCreateUserMutation} from "../../../services/graphql";
import { Link, useNavigate  } from 'react-router-dom';
import styloLogo from "../../../assets/stylo-logo.png";



const Signup = () => {

  const navigate = useNavigate()



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const {createUser,mutationData,mutationError} = useCreateUserMutation()


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend
   await createUser({variables:formData})
  };

  useEffect(()=>{
    if(mutationData && !mutationError){
      navigate("/login")
    }

  },[mutationData,mutationError,navigate])

  return (
    <>
    <section className='parent-container' >
    <img className="stylo-logo" src={styloLogo} alt="stylo-logo" />
     <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div>
            <h4>Already a User, <Link to={"/login"} >Login</Link></h4>
        </div>
        <button type="submit" className="btn-signup">Sign Up</button>
      </form>
    </div>
    </section>
   
    </>
   
  );
};

export default Signup;
