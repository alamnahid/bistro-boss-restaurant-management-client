import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
  const navigate = useNavigate()
  const {logOut} = useAuth()
  axiosSecure.interceptors.request.use(function(confiq){
    const token = localStorage.getItem('access-token')
    console.log('request stopped by interceptor', token)
    confiq.headers.authorization = `Bearer ${token}`
    return confiq;
  }, function(error){
    return Promise.reject(error)
  })

  // 401 and 403 ststus 
  axiosSecure.interceptors.response.use(function(response){
    return response;
  },async (error)=>{
    const status = error.response.status;
    if(status===401 || status === 403){
      await logOut()
      navigate('/login')
    }
    return Promise.reject(error);
  })
  return axiosSecure;
};

export default useAxiosSecure;