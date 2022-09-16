// import React,{useState,useContext} from 'react'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import {store} from '../../App'
// import { useFormik } from "formik";
// import { loginSchema } from '../FormsValidations/LoginForm';


// // save the token in local storage



// const Login = () => {
//   const [token,setToken] = useContext(store);
//   const navigate = useNavigate();
//   const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit,} = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: loginSchema,
//     onSubmit :async (values,action)=>{
//       await  axios.post("http://localhost:8000/login",values)
//       .then((res)=>{
//           setToken(res.data.token)
//           alert("Login Succesfully")
//       })
//       .catch((err)=>{
//           console.log(err);
//           alert(err)
//       })
//         action.resetForm()
//     },
//     onChange:(values)=>{
//         console.log(values)
//     }
//   });

// //   const [formData,setFormData] = useState({
// //     email:'',
// //     password:'',
// // })
// // const handleChanged = (e)=>{
// //     setFormData({...formData,[e.target.name]:e.target.value})
// // }
// // const handleSubmitd = (e)=>{
// //     e.preventDefault();
// //     console.log(formData)
// //     axios.post("http://localhost:8000/login",formData)
// //     .then((res)=>{
// //         setToken(res.data.token)
// //         alert("Login Succesfully")
// //     })
// //     .catch((err)=>{
// //         console.log(err);
// //         alert(err)
// //     })
// // }
// if(token){
//   localStorage.setItem('token',token);
//   navigate('/')
// } 
//   return (
//     <>
//        <form onSubmit={handleSubmit} autoComplete="off">
//         {/* <label>Email</label>
//         <input name="email" type="email" value={formData.email} onChange={handleChange} />
//         <label>Password</label>
//         <input name="password" type="text" value={formData.password} onChange={handleChange} />
//         <button onClick={handleSubmit}>Submit</button> */}
//         <label htmlFor="email">Email</label>
//       <input
//         value={values.email}
//         onChange={handleChange}
//         id="email"
//         type="email"
//         placeholder="Enter your email"
//         onBlur={handleBlur}
//       />
//       {errors.email && touched.email && <p className="error">{errors.email}</p>}
//       <label htmlFor="password">Password</label>
//       <input
//         id="password"
//         type="password"
//         placeholder="Enter your password"
//         value={values.password}
//         onChange={handleChange}
//         onBlur={handleBlur}
//       />
//       {errors.password && touched.password && (
//         <p className="error">{errors.password}</p>
//       )}
//       <button type='submit' >Login</button>
//     </form>
//     </>
//   )
// }

// export default Login






// import * as React from 'react';
import React,{useState,useContext} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {store} from '../../App'
import { useFormik } from "formik";
import { loginSchema } from '../FormsValidations/LoginForm';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Login = ()=> {

  const [token,setToken] = useContext(store);
  const navigate = useNavigate();
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit,} = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit :async (values,action)=>{
      await  axios.post("http://localhost:8000/login",values)
      .then((res)=>{
          setToken(res.data.token)
          alert("Login Succesfully")
          
      })
      .catch((err)=>{
          console.log(err);
          alert(err)
      })
        action.resetForm()
    },
    onChange:(values)=>{
        console.log(values)
    }
  });
if(token){
  localStorage.setItem('token',token);
  navigate('/')
} 

  return (
    <>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: '80vh',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
              />
              {errors.email && touched.email && <p className="error">{errors.email}</p>}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                autoComplete="current-password"
                id="password"
               type="password"
               placeholder="Enter your password"
               value={values.password}
               onChange={handleChange}
               onBlur={handleBlur}
              />
                    {errors.password && touched.password && (
         <p className="error">{errors.password}</p>
 )}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Typography component={RouterLink} to='/register'>{"Don't have an account? Sign Up"}</Typography>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
 
</>

  );
}
export default Login