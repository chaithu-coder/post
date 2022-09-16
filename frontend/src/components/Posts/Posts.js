// import React,{useEffect, useState,useContext} from 'react'
// import {Link,useNavigate} from 'react-router-dom'
// import { Container, Grid, Button, Typography } from '@mui/material';
// import ScaleLoader from 'react-spinners/ScaleLoader'
// import { store } from '../../App';
// import {ImageListItem} from '@mui/material'
// import ViewPage from '../ViewPage/ViewPage';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// const Posts = ()=> {
//     const [token,setToken] = useContext(store);

// // data stroring
// const [data,setData] = useState([])
// // loading animatin
// const [loading, setLoading] = useState(true);
// // navigating to specific id
// const navigate = useNavigate()
// // fetching data
// const getData = ()=>{
//     try {
//          fetch('http://localhost:8000/getposts',{
//             headers:{
//                 'x-token':token
//               }
//          })
//         .then((res)=>res.json())
//         .then(response=>{
//             setData(response)
//             // setLoading(true)
//             })
//     } catch(err){console.log(err)}
// }

// useEffect(()=>{
//     if(token === null) {
//         navigate('/login')
//       } 
//       if(token){
//    getData()
//    document.title = "All Posts"
//       }
// },[])
// console.log(data)
//   return (
//     <>
//         <Container style={{"marginTop":"70px","textAlign":"center"}}>
//         {
//                 loading === false ?  <>
//                     <ScaleLoader
//                     color="#3059ef"
//                     loading={loading}
//                     height={40}
//                     margin={5}
//                     width={5}
//                     speedMultiplier={1} 
//                     style={{marginLeft:"40px"}}
//                     /> 
//                     <Typography variant="h5" style={{marginTop:"20px"}}>Loading...</Typography>
//                 </> 
//                 :
//                 <>
//                     <Typography variant='h2'>Welcome to My Blog</Typography>
//                     <Link to="/create"><Button color='primary'>Create a User profile</Button></Link> 
//                 </>
//         }           
//         </Container>
//     <Grid container spacing={10}>
//         {
//             data.reverse().map((item)=>{
//                 return <>
//                     <Container>
//                         <Grid container spacing={10}>
//                             <Grid item md={3}>
//                                 {/* <img width="250px" src={item.img} alt="postimage"/> */}
//                                 <LazyLoadImage
//                             // alt={image.alt}
//                             height='100px'
//                             src={item.src} // use normal <img> attributes as props
//                             width='100px' />
//                                 <Button  variant="contained" color="secondary" onClick={()=>navigate('/getposts/'+item._id)}>View</Button>
                               
//                             </Grid>
//                         </Grid>
//                     </Container>
//                 </>
//             })
//         }
//       </Grid>

      
//     </>

    
//   )
// }

// export default Posts




import React,{useEffect, useState,useContext} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { Container, Grid, Button, Typography } from '@mui/material';
import ScaleLoader from 'react-spinners/ScaleLoader'
import { store } from '../../App';
import {ImageListItem} from '@mui/material'
import ViewPage from '../ViewPage/ViewPage';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PostCard from './PostCard';
import Skeleton from 'react-loading-skeleton';







const Posts = () => {
    const [token,setToken] = useContext(store);
    // const [localData,setLocalData] = useState()
    // data stroring
    const [data,setData] = useState([])
    // loading animatin
    const [loading, setLoading] = useState(true);
    // navigating to specific id
    const navigate = useNavigate()
    // fetching data
    const getData = ()=>{
        try {
             fetch('http://localhost:8000/getposts',{
                headers:{
                    'x-token':token
                  }
             })
            .then((res)=>res.json())
            .then(response=>{
                setData(response)
                localStorage.setItem('posts',JSON.stringify(response));
                setLoading(false)
                })
        } catch(err){console.log(err)}
    }
    
    useEffect(()=>{
        if(token === null) {
            navigate('/login')
          } 
          if(token){
       getData()
       document.title = "All Posts"
          }
    },[])
    console.log(data)
  return (
    <>
    <Container style={{"marginTop":"70px","textAlign":"center"}}>
         
                     <Typography variant='h2'>Welcome </Typography>
                     <Link to="/create"><Button color='primary'>Create a User profile</Button></Link> 
                      <Grid container spacing={3}>
                     
                     {
                      data!==undefined ?<>
                      {
                     data.map((item)=>{
                      return <>
                        <Grid item xs={3}>                      
                          <PostCard  imgdata={item}/>
                      </Grid>
                      </>
                    })
                  } 
                      </> 
                  
                  :<h1>Loading</h1>
                     }
                     
                      {/* {
                    data&& data.map((item)=>{
                      return <>
                        <Grid item xs={3}>                      
                          <PostCard  imgdata={item}/>
                      </Grid>
                      </>
                    })
                  } */}
                        </Grid>
         </Container>
    </>
  )
}

export default Posts
