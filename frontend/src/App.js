import axios from 'axios';
import React,{useState,useEffect,createContext} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreateAndUpdatePost from './components/CreateAndUpdatePost/CreateAndUpdatePost';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';
import Register from './components/Register/Register';
import ViewPage from './components/ViewPage/ViewPage';
import Skeleton from 'react-loading-skeleton';
import { Grid } from '@mui/material';
import ClassicPostLoader from './ContentLoader';

export const store = createContext();


const  App = ()=> {
const [token,setToken] = useState(localStorage.getItem('token'));
const [loading,setLoading] = useState(true)



  return (
   <>
   <div>
   <store.Provider value={[token,setToken]}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/getposts/:id" element={<ViewPage />} />
            <Route path="/create/:id" element={<CreateAndUpdatePost />} />
            <Route path="/create" element={<CreateAndUpdatePost />} />
          </Routes>
        </Router>
      </store.Provider>
      </div>
    



      {/* {
        loading ? <>
        <Grid container spacing={2}>
        <Grid item xs={3}>
        <Skeleton circle={true} height={100} width={100}/>
          <h1><Skeleton /></h1>
          <h2><Skeleton /></h2>
        </Grid>
        <Grid item xs={3}>
          <h1>Test</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>Test</h1>
        </Grid>
        <Grid item xs={3}>
        <h1>Test</h1>
        </Grid>
    </Grid>
        </> : <>
        {
        data && data.map((item)=>{
        return   <div>
            <img src={item.picture.medium}/>
            <h1>{item.email}</h1>
            </div>
        })
      }
      </>
      } */}



   </>
  );
}

export default App;




// <Grid container spacing={2}>
// <Grid item xs={3}>
// <Skeleton circle={true} height={100} width={100}/>
//   <h1><Skeleton /></h1>
//   <h2><Skeleton /></h2>
// </Grid>
// <Grid item xs={3}>
//   <h1>Test</h1>
// </Grid>
// <Grid item xs={3}>
//   <h1>Test</h1>
// </Grid>
// <Grid item xs={3}>
// <h1>Test</h1>
// </Grid>
// </Grid> 