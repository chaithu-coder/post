import React,{useEffect, useState,useContext} from 'react';
import { Link, useParams ,useNavigate} from 'react-router-dom';
import { Container,Grid,Typography,Button } from '@mui/material';
import ScaleLoader from 'react-spinners/ScaleLoader'
import { store } from '../../App';
import {ImageListItem} from '@mui/material'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios'
import ContentLoader from 'react-content-loader';
import ClassicPostLoader from '../../ContentLoader';
import Base64Downloader from 'common-base64-downloader-react';


const ViewPage = () => {
    const params = useParams()
    const [token,setToken] = useContext(store);
    const [view,setView] = useState({})
    const [name,setName] = useState({})
    let [loading, setLoading] = useState(false);
    const [selectetdFile, setSelectedFile] = useState([]);  
     const [fileBase64String, setFileBase64String] = useState("");

    const navigate = useNavigate()
const [pdfData,setpdfData] = useState("")
    const getData =async ()=>{
       await fetch(`http://localhost:8000/getposts/${params.id}`,{
        headers:{
            'x-token':token
          }
       })
        .then((res)=>res.json())
        .then(response=>
            {
                setView(response)
                 setLoading(false)
                 setpdfData(response.file)
            })
    }
const handleDelete =(id)=>{
    fetch(`http://localhost:8000/deletepost/${id}`,{
        headers:{
            'x-token':token
          },
        method:'DELETE'})
    .then((res)=>res.json())
    .then(response=>{
      navigate('/posts')
      console.log("deleted")
    })
}

// const handleDelete = async (id)={
  
// }
// const handleDelete =async (id)=>{
//   await axios.delete(`http://localhost:8000/deletepost/${id}`,{
//     headers:{
//      'x-token':token
//     },
//   }).then(()=>console.log)
  
// }


const getProfile =async ()=>{
    await fetch('http://localhost:8000/myprofile',{
     headers:{
         'x-token':token
       }
    })
     .then((res)=>res.json())
     .then(response=>
         {
             setName(response)
              setLoading(false)
         })
 }
    useEffect(() => {
        if(token === null) {
            navigate('/login')
          } 
          if(token){
        getData()
        getProfile()
        document.title = "View Profile" 
    }
      }, [])    

 console.log(view)
  return (
   <>
   {/* {
   <Container style={{"marginTop":"70px"}}>
   {
                loading === true ?  <>
                    <ScaleLoader
                    color="#3059ef"
                    loading={loading}
                    height={40}
                    margin={5}
                    width={5}
                    speedMultiplier={1} 
                    style={{marginLeft:"600px"}}
                    /> 
                    <Typography variant="h5" style={{marginTop:"20px"}}>Loading...</Typography>
                </> 
                :
                <>
                    <Typography variant='h2'>Welcome to My Blog</Typography>
                    <Typography paragraph>This is an Paragraphy</Typography>
                        <Grid container spacing={2}>
                        <Grid item xs={6} md={4}>
                        <ImageListItem key={view.img}>
                                    <img
                                        src={view.img}
                                        alt={view.title}
                                        loading="lazy"
                                    />
                                    </ImageListItem>
                        </Grid>
                        <Grid item xs={6} md={8}>
                            <Typography variant="h5">projectName: {view.name }</Typography>
                            <Typography variant="h5">url: {view.category}</Typography>
                            <Typography variant="h5">url: {view.des}</Typography>
                            <Typography variant="h5">url: {view.category}</Typography>
                            <Typography variant="h5">Created {view.date }</Typography>
                            <embed
                            src={view.file}
                            type="application/pdf"
                            height={300}
                            width={300}
                          />
                        </Grid>
                        </Grid>
                       <Link to="/posts"> <Button variant="contained" color="secondary" >Go back </Button></Link>
                       {
                        name.email === 'nandimandalavcsdscsdcsdfdmsunny2890@gmail.com' && <>
                        <Button color='primary'variant="contained" onClick={()=>navigate('/create/'+view._id)}> Edit</Button>
                        <Button variant="contained" color="secondary" onClick={()=>{handleDelete(view._id)}}>  Delete</Button>
                        </>
                       }
                </>
        } 
   </Container>
    }     */}

 
 <Grid container spacing={2}>
 <Grid item xs={2}>
 </Grid>
 <Grid item xs={4}>
   {    
    view.img ? <ImageListItem sx={{ width: 400, height: 400 }}> <img src={view.img} /> </ImageListItem> :<Skeleton height={350} width={400} borderRadius={10} />
   }
 </Grid>
 <Grid item xs={4}>
 <Typography variant="h5">projectName: {view.name }</Typography>
                            <Typography variant="h4">url: {view.category  || <Skeleton />}</Typography>
                            <Typography variant="h4">url: {view.des  || <Skeleton />}</Typography>
                            <Typography variant="h4">url: {view.category  || <Skeleton />}</Typography>
                            <Typography variant="h4">Created {view.date   || <Skeleton />}</Typography>
                            
                            <Base64Downloader
                              base64={view.file}
                              downloadName={view.name}
                              Tag="a"
                              extraAttributes={{ href: '#' }}
                              className="my-class-name"
                              style={{ color: 'blue' }}
                              onDownloadSuccess={() => console.log('File download initiated')}
                              onDownloadError={() => console.warn('Download failed to start')}
                          >
                              Click to download 
                          </Base64Downloader>

 </Grid>
 </Grid>    
   </>
  )
}

export default ViewPage