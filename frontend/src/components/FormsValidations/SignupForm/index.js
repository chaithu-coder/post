import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    fname:Yup.string().min(5).max(25).required("Please Enter Your Name"),
    lname:Yup.string().min(5).max(25).required("Please Enter Your last"),
    email:Yup.string().email().required("Please Enter Your Email"),
    phone:Yup.string().min(1).max(12).required("Please Enter Your Phone Number"),
    password:Yup.string().min(6).max(10).required("Please Enter Password"),
    cpassword:Yup.string().required().oneOf([Yup.ref('password'),null],
    "Password does not match")
})