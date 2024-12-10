import React,{useState} from 'react'
import icon from '../images/icon.png'
import { useNavigate } from 'react-router-dom'
import './App.css'
import AxiosService from '../commen/ApiService'
import { toast } from 'react-toastify'



function Forgetpassword() {
let navigate = useNavigate()

const [email,setEmail] = useState("")
const [loading, setLoading] = useState(false)
const forgetpassword = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try {
        let res = await AxiosService.post('/user/forget-password',{
            email
        })
        if(res.status==201)
        {
            toast.success("Reset link sent successfully to your email.please check the email ")
        }
    } catch (error) {
        console.log(error)
        toast.error("Invalid email")
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
      
    <div className="login" style={{height:"510px"}}>
    <div className="avatar" style={{width:"100px", height:"100px"}}>
        <img src={icon} />
      </div>
      <h2>Forget Password</h2>
      <h3>Enter your email to get reset link </h3>

      <form className="login-form">

        <div className="textbox">
          <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
          <span className="material-symbols-outlined"> email </span>
        </div>

        
       
        <button type="submit" onClick={forgetpassword} >Send</button>

        <p style={{ color: '#157ae1',fontSize:'18px',  }}>
            Remember your password ?&nbsp; &nbsp;
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/login')}>
              Login
            </span>{' '}
          </p>
       
      </form>
    </div>
    </>
  )
}

export default Forgetpassword