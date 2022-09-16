// import React,{useState} from 'react'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import {useFormik} from 'formik'
// import { signUpSchema } from '../FormValidation/';


// const Register = () => {
//     const navigate = useNavigate();

// //    const {values,errors,touched,handleBlur,handleChange,handleSubmit} =  useFormik({
//     const formik = useFormik({
//        initialValues:{
//         name:"",
//         email:"",
//         phone:"",
//         password:'',
//         cpassword:''
//        },
//        validationSchema:signUpSchema,
//         onSubmit:(values,action)=>{
//             action.resetForm();
//             alert(JSON.stringify(values, null, 2));
//         },
//     })

//     // const [formData,setFormData] = useState({
//     //     name:'',
//     //     email:'',
//     //     phone:"",
//     //     password:'',
//     //     cpassword:''
//     // })
//     // const handleChange = (e)=>{
//     //     setFormData({...formData,[e.target.name]:e.target.value})
//     // }

    

//     // const handleSubmit = (e)=>{
//     //     e.preventDefault();
//     //     console.log(formData)
//     //     axios.post("http://localhost:8000/register",formData)
//     //     .then((res)=>{
//     //         console.log(res.data)
//     //         alert("Registered Successfully")
//     //         navigate('/login')
//     //     })
//     //     .catch((err)=>{
//     //         console.log(err);
//     //         alert(err)
//     //     })
//     // }
//   return (
//    <>
//     <form onClick={formik.handleSubmit}>
//     <label>Name</label>
//         <input name="name" type="text"  value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
//         {formik.errors.name && formik.touched.name && (
//             <p>{formik.errors.name}</p>
//           )}
//         <label>Email</label>
//         <input name="email" type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
//         {formik.errors.email && formik.touched.email ? ( <p >{formik.errors.email}</p>  ) : ""}
//         <label>Phone Number</label>
//         {/* <input name="phone" type="text"  value={values.phone} onChange={handleChange} onBlur={handleBlur} isValid={touched.phone && !errors.phone}/>
//         {errors.phone && touched.phone ? ( <p >{errors.phone}</p>  ) : null}
//         <label>password</label>
//         <input name="password" type="text"  value={values.password} onChange={handleChange} onBlur={handleBlur} isValid={touched.password && !errors.password}/>
//         {errors.password && touched.password? ( <p >{errors.password}</p>  ) : null}
//         <label>cpassword</label>
//         <input name="cpassword" type="text" value={values.cpassword} onChange={handleChange} onBlur={handleBlur} isValid={touched.cpassword && !errors.cpassword}/>
//         {errors.cpassword && touched.cpassword ? ( <p >{errors.cpassword}</p>  ) : null} */}
//         <button type='submit'>Submit</button>
//     </form>
//    </>
//   )
// }

// export default Register



// import React from "react";

// import { useFormik } from "formik";
// import { signUpSchema } from '../FormValidation';


// const Register = ()=> {
//   const formik = useFormik({
//     initialValues: {
//       full_name: "",
//       email: "",
//       password: "",
//       confirm_password: ""
//     },
//     validationSchema: signUpSchema,
//     onSubmit: (values,action) => {
//       alert(JSON.stringify(values, null, 2));
//       console.log(formik.values)
//       action.resetForm()
//     }
//   });
//   return (
//     <div className="App">
//       <h1>Validation with Formik + Yup</h1>

//       <form onSubmit={formik.handleSubmit}>
//         <div>
//           <label>Full Name</label>
//           <input
//             type="text"
//             name="full_name"
//             value={formik.values.full_name}
//             onChange={formik.handleChange}
//           />
//           {formik.errors.full_name && formik.touched.full_name && (
//             <p>{formik.errors.full_name}</p>
//           )}
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//           />
//           {formik.errors.email && formik.touched.email && (
//             <p>{formik.errors.email}</p>
//           )}
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//           />
//           {formik.errors.password && formik.touched.password && (
//             <p>{formik.errors.password}</p>
//           )}
//         </div>
//         <div>
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             name="confirm_password"
//             value={formik.values.confirm_password}
//             onChange={formik.handleChange}
//           />
//           {formik.errors.confirm_password &&
//             formik.touched.confirm_password && (
//               <p>{formik.errors.confirm_password}</p>
//             )}
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }
// export default Register



import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signUpSchema } from "../FormsValidations/SignupForm";
import React,{useState,useContext} from 'react'

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


const Register = () => {
    const navigate = useNavigate();
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit,} = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      password: "",
      cpassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit :async (values,action)=>{
      await  axios.post("http://localhost:8000/register",values)
        .then((res)=>{
            console.log(res.data)
            alert("Registered Successfully")
            navigate('/login')
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
          <Box component="form" noValidate autoComplete='off' onSubmit={handleSubmit} sx={{ mt: 1 }}>

                        <Grid container spacing={3}>
                                <Grid item xs={6}>
                                            <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="First Name"
                                        // name="email"
                                        id="fname"
                                        type="fname"
                                        // autoComplete="email"
                                        autoFocus
                                        onChange={handleChange}
                                        placeholder="Enter your First Name"
                                        onBlur={handleBlur}
                                        value={values.fname}
                                        />
                                         {errors.fname && touched.fname && <p className="error">{errors.fname}</p>}
                                </Grid>
                                <Grid item xs={6}>
                                        <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Last Name"
                                    // name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={handleChange}
                                    id="lname"
                                    type="lname"
                                    placeholder="Enter your Second Name"
                                    onBlur={handleBlur}
                                    value={values.lname}
                                    />
                                     {errors.lname && touched.lname && <p className="error">{errors.lname}</p>}
                                </Grid>
                            </Grid>

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
                                value={values.email}
                                />
                                {errors.email && touched.email && <p className="error">{errors.email}</p>}
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Phone Number"
                                // name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                                id="phone"
                                type="text"
                                placeholder="Enter Your Phone Number"
                                onBlur={handleBlur}
                                value={values.phone}
                                />
                                {errors.phone && touched.phone && <p className="error">{errors.phone}</p>}
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                // name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                                id="password"
                                type="password"
                                placeholder="Enter Password"
                                onBlur={handleBlur}
                                value={values.password}
                                />
                                {errors.password && touched.password && (<p className="error">{errors.password}</p>)}
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                // name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                                id="cpassword"
                                type="password"
                                placeholder="Enter Password"
                                onBlur={handleBlur}
                                value={values.cpassword}
                                />
                                {errors.cpassword && touched.cpassword && (<p className="error">{errors.cpassword}</p> )}
                            </Grid>
                        </Grid>
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
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
                <Typography component={RouterLink} to='/login'>{"Already having account ? Login here"}</Typography>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>






    <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="fname">First Name</label>
      <input
        value={values.fname}
        onChange={handleChange}
        id="fname"
        type="fname"
        placeholder="Enter First Name"
        onBlur={handleBlur}
        className={errors.fname && touched.fname ? "input-error" : ""}
      />
      {errors.fname && touched.fname && <p className="error">{errors.fname}</p>}
      <label htmlFor="name">Last Name</label>
      <input
        value={values.lname}
        onChange={handleChange}
        id="lname"
        type="lname"
        placeholder="Enter Last Name"
        onBlur={handleBlur}
      />
      {errors.lname && touched.lname && <p className="error">{errors.lname}</p>}
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <label htmlFor="phone">phone</label>
      <input
        id="phone"
        type="text"
        placeholder="Enter your phone"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.phone && touched.phone && <p className="error">{errors.phone}</p>}
      <label htmlFor="password">Password</label>
      <input
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
      <label htmlFor="cpassword">Confirm Password</label>
      <input
        id="cpassword"
        type="password"
        placeholder="Confirm password"
        value={values.cpassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.cpassword && touched.cpassword ? "input-error" : ""
        }
      />
      {errors.cpassword && touched.cpassword && (
        <p className="error">{errors.cpassword}</p>
      )}
      <button type="submit">Submit</button>
    </form>
    </>

  );
};
export default Register;

