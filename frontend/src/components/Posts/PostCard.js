// import React from 'react';
// import {Link,useNavigate} from 'react-router-dom'
// import { Container, Grid, Button, Typography } from '@mui/material';


// const PostCard = ({imgdata}) => {
//   const navigate = useNavigate()
//   console.log(imgdata)
//   return (
//     <>
//       {
//         <>

//         <img src={imgdata.img} width='100px'/>
//         <Button  variant="contained" color="secondary" onClick={()=>navigate('/getposts/'+imgdata._id)}>View</Button>
//         </>
//       }
//     </>
//   )
// }

// export default PostCard


import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { Container, Grid, Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Skeleton from 'react-loading-skeleton';


const PostCard = ({imgdata}) => {
  const navigate = useNavigate()
  console.log(imgdata)
  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} >
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader={imgdata.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={imgdata.img }
        alt="Paella dish"
      />   
           <CardActions>
        <Button onClick={()=>navigate('/getposts/'+imgdata._id)}  size="small">View</Button>
      </CardActions>
    </Card>
  

      
    
  )
}

export default PostCard