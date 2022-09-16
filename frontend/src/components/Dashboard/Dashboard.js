import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {store} from '../../App'


const Dashboard = () => {
  const navigate = useNavigate();
  const [token,setToken] = useContext(store);
  const [data,setData] = useState([]);
 
  useEffect(()=>{
    if(token === null) {
      navigate('/login')
    } 
    if(token){
    axios.get('http://localhost:8000/myprofile',{
      headers:{
        'x-token':token
      }
    }).then(res=>setData(res.data))
    .catch(err=>console.log(err))
  }
  },[])
 

  return (
    <>
      <h1>Dashboard</h1>
       {
       
            <div>
            <h1>Welcome : {data.fname}</h1>
            <h1> {data.lname}</h1>
            <h3>{data.email}</h3>
            </div>
            
        
       }    
      
       </>
  )
}

export default Dashboard
