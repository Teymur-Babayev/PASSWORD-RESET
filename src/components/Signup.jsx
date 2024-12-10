import React, { useState } from "react";
import icon from "../images/icon.png";
import { useNavigate } from "react-router-dom";
import AxiosService from "../commen/ApiService";
import {toast} from 'react-toastify'
import "./App.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  let [userName,setUserName] = useState("")
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  
  let navigate = useNavigate();

  const createUser = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try {
      let res = await AxiosService.post('/user/signup',{
        userName,
        email,
        password
      })
      if(res.status==201)
      {
        toast.success("User created successfully")
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
      toast.error("Fill all the detials")
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <>
     {loading && (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      )}
      <div className="login" style={{ height: "635px", paddingTop: "11px" }}>
        <div className="avatar" style={{ width: "100px", height: "100px" }}>
          <img src={icon} />
        </div>
        <h2>Signup</h2>

        <h3>Welcome </h3>
        <form className="login-form">
          <div className="textbox">
            <input type="text" placeholder="Username" required onChange={(e)=>setUserName(e.target.value)}  />
            <span className="material-symbols-outlined"> account_circle </span>
          </div>

          <div className="textbox">
            <input type="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)} />
            <span className="material-symbols-outlined"> email </span>
          </div>

          <div className="textbox" >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              pattern=".{8,}" // Minimum of 8 characters
              title="Password must be at least 8 characters"
              required onChange={(e)=>setPassword(e.target.value)}
            />
            <span
              style={{ paddingBottom: "70px" }}
              className="material-symbols-outlined"
            >
              {" "}
              lock{" "}
            </span>

            <div style={{ display: "flex" }}>
              <input
                style={{ width: "15px" }}
                type="checkbox"
                checked={showPassword}
                onChange={togglePasswordVisibility}
              />
              <span
                style={{
                  paddingTop: "60px",
                  paddingLeft: "10px",
                  color: "#157ae1",
                }}
              >
                Show Password
              </span>
            </div>
          </div>

          <button type="submit" onClick={(e)=>createUser(e)} >SIGNUP</button>

          <p style={{ color: "#157ae1", fontSize: "18px", marginTop: "4px" }}>
            Already have an account?&nbsp; &nbsp;
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>{" "}
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;