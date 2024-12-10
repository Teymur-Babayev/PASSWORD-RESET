
import { useNavigate } from 'react-router-dom'

function useLogout() {
    let navigate = useNavigate()
  return()=>{
        sessionStorage.clear()
        navigate('/login')
    }
}


export default useLogout