// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const nodemailer = require("nodemailer");
// // const jwt =  require('jsonwebtoken');
// // const User = require('./model/userSchema');
// // const middleware = require('./middleware/middleware');
// // const posts = require('./model/Posts')
// // const app = express();
// // require('dotenv').config();









// // // connecting to mongoose
// // mongoose.connect(process.env.DB, { useNewUrlParser: true , useUnifiedTopology: true })
// //         .then(() => console.log('DB connected'))
// //         .catch(err => console.log(err))




// // app.use(express())
// // app.use(bodyParser.json({ limit: '50mb' }));
// // app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// // app.use(cors({origin:"*"}))


// // app.get('/',(req,res)=>{
// //     res.send('Hello World')
// // })


// // // 


// // var transporter = nodemailer.createTransport({
// //     service:'gmail',
// //     auth:{
// //         user:'n.sunny170@gmail.com',
// //         pass:'tzbpgqiicurlrrqx'
// //     },
// //     tls:{
// //         rejectUnauthorized:false
// //     }
// // })

// // // 

// // // register route
// // app.post('/register',async (req,res)=>{
// //     try{
// //         const {fname,lname,email,phone,password,cpassword} = req.body;
// //         const existingUser = await User.findOne({email:email});
// //         if(existingUser){
// //             console.log('User already exists')
// //             return res.status(400).send('User already exists')
// //         }
// //         else if(password !== cpassword){
// //             console.log('Password does not match')
// //             return res.status(400).send('Password does not match')
// //         }
// //         else {
// //             const uniqueString = randSting()
// //             const isValid = false
// //             const {fname,lname,email,phone,password,cpassword} = req.body
// //             const newUser = new User(isValid,uniqueString,...req.body);

           
// //             console.log(newUser)
// //             var mailData = {
// //                 from: "myemail@gmail.com",
// //                 to: `${newUser.email}`,
// //                 subject: "TestMail",
// //                 text: "Hello world?", // plain text body
// //                 html: "<h1>Hello world?</h1>",
               

// //             };
// //             transporter.sendMail(mailData, function(error, info) {
// //                 if (error) {
// //                     console.log(error);
// //                     return;
// //                 }
// //                 console.log('Message sent');
// //                 transporter.close();
// //             });
// //             await newUser.save();
// //             console.log('User created')
// //             res.status(200).send('User registered successfully')
// //         }
// //     }
// //     catch(err){
// //         console.log(err)
// //         res.status(500).send(err)
// //     }
// // })



// // app.post('/login',async (req,res)=>{
// //         try {
// //             const{email,password} = req.body;
// //             const existinguser = await User.findOne({email:email});
// //                 if(!existinguser){
// //                     console.log('User does not exist')
// //                     return res.status(400).send('User does not exist')
// //                 }
// //                 if(existinguser.password !== password ){
// //                     console.log('Password dogkjges not match')
// //                     return res.status(400).send('Password does not match')
// //                 }
// //                 const payload = {user:{ id:existinguser.id}}
// //                 jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:3600000},
// //                 (err,token)=>{
// //                     if(err) throw err;
// //                     return res.json({token})
// //                 })
// //         } 
// //         catch (error) {
// //             console.log(error)
// //             return res.status(500).send("Server error")
// //         }
// // })

// // // protecting routes
// // app.get('/myprofile',middleware,async (req,res)=>{
// //     try {
// //         const exist = await User.findById(req.user.id);
// //         if(!exist){
// //             console.log('User not found')
// //             return res.status(400).send('User not found')
// //         }
// //         res.json(exist);
// //     } catch (error) {
// //         console.log(error)
// //         return res.status(500).send("Server error")
// //     }
// // })

// // app.put('/myprofile/:id',middleware,async (req,res)=>{
// //     try {
// //         await User.findByIdAndUpdate (req.params.id,req.body)
// //         console.log("Updating particular id")
// //         return res.send(await User.find())
// //     } catch (error) {
// //         console.log("Error in updating particular id")
// //         console.log(error.message)
// //     }
// // })


// // app.get('/getusers',middleware,async (req,res)=>{
// //     try{
// //         const Users = await User.find();
// //         console.log("data is fetched")
// //         return res.send(Users) 
// //     }
// //     catch(err){
// //         console.log(err.msg)
// //         console.log("Error in fetching data")
// //     }
// // })


// // app.delete('/deleteuser/:id',middleware,async (req,res)=>{
// //     try {
// //         await User.findByIdAndDelete(req.params.id)
// //         console.log("deleting particular id")
// //         return res.send(await User.find())
// //     } catch (err) {
// //         console.log("Error in deleting particular id")
// //         console.log(err)
// //     }
// // })

// // // posts
// // app.get('/getposts',middleware,async (req,res)=>{
// //     try{
// //         const allDetails = await posts.find();
// //         console.log("data is fetched")
// //         return res.send(allDetails) 
// //     }
// //     catch(err){
// //         console.log(err.msg)
// //         console.log("Error in fetching data")
// //     }
// // })


// // app.get('/getposts/:id',middleware,async (req,res)=>{
// //     try{
// //         const findData = await posts.findById(req.params.id)
// //         console.log("fetching particular id")
// //         return res.send(findData)
// //     }
// //     catch(err){
// //         console.log("Error in fetching particular id")
// //         console.log(err.message)
// //     }
// // })


// // app.post('/addposts',middleware,async (req,res)=>{
// //     const {name,img,file,category,des} = req.body;
// //     try{
// //         const newData = new posts({name,img,file,category,des});
// //         await  newData.save();
// //         console.log("new post added")
// //         return res.json(await posts.find())
// //     }
// //     catch(err){
// //         console.log(err.message)
// //         console.log("Error in adding posts")

// //     }
// // })




// // app.delete('/deletepost/:id',middleware,async (req,res)=>{
// //     try {
// //         await posts.findByIdAndDelete(req.params.id)
// //         console.log("deleting particular id")
// //         return res.send(await posts.find())
// //     } catch (err) {
// //         console.log("Error in deleting particular id")
// //         console.log(err)
// //     }
// // })

// // app.put('/updatepost/:id',middleware,async (req,res)=>{
// //     try {
// //         await posts.findByIdAndUpdate (req.params.id,req.body)
// //         console.log("Updating particular id")
// //         return res.send(await posts.find())
// //     } catch (error) {
// //         console.log("Error in updating particular id")
// //         console.log(error.message)
// //     }
// // })


// // // 
// // app.post('/contact',middleware, async(req,res)=>{
// //     try{
// //         const {name,email,message} =req.body;
// //         if(!name || !email || !message){
// //             console.log("error in contact");
// //             return res.status(422).json({error:"Fill all contact fields"})
// //         }
// //         const userContact = await posts.findOne({_id:req.rootUserId});

// //         if(userContact){
// //             const userMessage =await userContact.addMessage(name,email,message);

// //             await userContact.save();
// //             res.status(201).json({message:"Message sent successfully"});
// //         }

// //     }catch(error){
// //         console.log(error);
// //     }
// // });
// // // 


// // // estalishing Port
// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => {
// //     console.log(`Server started on port ${PORT}`);
// // }
// // );






const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require("nodemailer");
const jwt =  require('jsonwebtoken');
const User = require('./model/userSchema');
const middleware = require('./middleware/middleware');
const posts = require('./model/Posts')
const app = express();
require('dotenv').config();









// connecting to mongoose
mongoose.connect(process.env.DB, { useNewUrlParser: true , useUnifiedTopology: true })
        .then(() => console.log('DB connected'))
        .catch(err => console.log(err))




app.use(express())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({origin:"*"}))


app.get('/',(req,res)=>{
    res.send('Hello World')
})


// 


// var transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'n.sunny170@gmail.com',
//         pass:'tzbpgqiicurlrrqx'
//     },
//     tls:{
//         rejectUnauthorized:false
//     }
// })

// 

// const sendEmail=(email,uniqueString)=>{
//     var transporter = nodemailer.createTransport({
//         service:'gmail',
//         auth:{
//             user:'n.sunny170@gmail.com',
//             pass:'tzbpgqiicurlrrqx'
//         },
//         tls:{
//             rejectUnauthorized:false
//         }
//     });
    
//    console.log(uniqueString)
//    var  mailOptions={
//             from: "myemail@gmail.com",
//             to: email,
//             subject: "TestMail",
//             text: "Hello world?", // plain text body
//             html: `Press <a href="https://localhost:3000/verify/${uniqueString}>Click Here </a>`
//     }
//      transporter.sendMail(mailOptions, function(error, response) {
//                  if (error) {
//                      console.log(error);
//                      return;
//                  }
//                  console.log('Message sent');
//                  transporter.close();
//              });


// }



// 
// register route
app.post('/register',async (req,res)=>{
    try{
        const {fname,lname,email,phone,password,cpassword} = req.body;
        const existingUser = await User.findOne({email:email});
        if(existingUser){
            console.log('User already exists')
            return res.status(400).send('User already exists')
        }
        else if(password !== cpassword){
            console.log('Password does not match')
            return res.status(400).send('Password does not match')
        }
        else {
            // var uniqueString = "123456"
            // const isValid = false
            // const {email} = req.body
            const newUser = new User({fname,lname,email,phone,password,cpassword});
           
            // const sendEmail=(email,uniqueString)=>{
            //     var transporter = nodemailer.createTransport({
            //         service:'gmail',
            //         auth:{
            //             user:'n.sunny170@gmail.com',
            //             pass:'tzbpgqiicurlrrqx'
            //         },
            //         tls:{
            //             rejectUnauthorized:false
            //         }
            //     });
                
            //    console.log(uniqueString)
            //    var  mailOptions={
            //             from: "myemail@gmail.com",
            //             to: email,
            //             subject: "TestMail",
            //             text: "Hello world?", // plain text body
            //             html: `Press <a href="https://localhost:3000/verify/${uniqueString}>Click Here </a>`
            //     }
            //      transporter.sendMail(mailOptions, function(error, response) {
            //                  if (error) {
            //                      console.log(error);
            //                      return;
            //                  }
            //                  console.log('Message sent');
            //                  transporter.close();
            //              });
            
            
            // }
            // sendEmail(email)
            await newUser.save()

            console.log('User created')
            res.status(200).send('User registered successfully')
        }
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})


app.get('/verify/:uniqueString',async (req,res)=>{
    const {uniqueString} = req.params
    const user = await User.findOne({uniqueString:uniqueString})
    if(user){
        User.isValid = true
        await user.save()
        res.redirect('/')
    }
    else{
        res.json(" UserNot Found")
    }
})


app.post('/login',async (req,res)=>{
        try {
            const{email,password} = req.body;
            const existinguser = await User.findOne({email:email});
                if(!existinguser){
                    console.log('User does not exist')
                    return res.status(400).send('User does not exist')
                }
                if(existinguser.password !== password ){
                    console.log('Password dogkjges not match')
                    return res.status(400).send('Password does not match')
                }
                const payload = {user:{ id:existinguser.id}}
                jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:3600000},
                (err,token)=>{
                    if(err) throw err;
                    return res.json({token})
                })
        } 
        catch (error) {
            console.log(error)
            return res.status(500).send("Server error")
        }
})

// protecting routes
app.get('/myprofile',middleware,async (req,res)=>{
    try {
        const exist = await User.findById(req.user.id);
        if(!exist){
            console.log('User not found')
            return res.status(400).send('User not found')
        }
        console.log("fetching profile")
        res.json(exist);
    } catch (error) {
        console.log(error)
        return res.status(500).send("Server error")
    }
})

app.put('/myprofile/:id',middleware,async (req,res)=>{
    try {
        await User.findByIdAndUpdate (req.params.id,req.body)
        console.log("Updating particular id")
        return res.send(await User.find())
    } catch (error) {
        console.log("Error in updating particular id")
        console.log(error.message)
    }
})


app.get('/getusers',middleware,async (req,res)=>{
    try{
        const Users = await User.find();
        console.log("data is fetched")
        return res.send(Users) 
    }
    catch(err){
        console.log(err.msg)
        console.log("Error in fetching data")
    }
})


app.delete('/deleteuser/:id',middleware,async (req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        console.log("deleting particular id")
        return res.send(await User.find())
    } catch (err) {
        console.log("Error in deleting particular id")
        console.log(err)
    }
})

// posts
app.get('/getposts',middleware,async (req,res)=>{
    try{
        const allDetails = await posts.find();
        console.log(allDetails)
        // console.log(images)
        // const img = _.map(allDetails,'img','name');
       const img =  _.map(allDetails, i => _.pick(i, '_id', 'img','date'))  
        console.log(img)
        console.log("data is fetched")
        return res.send(img) 
    }
    catch(err){
        console.log(err.msg)
        console.log("Error in fetching data")
    }
})


app.get('/getposts/:id',middleware,async (req,res)=>{
    try{
        const findData = await posts.findById(req.params.id)
        console.log("fetching particular id")
        return res.send(findData)
    }
    catch(err){
        console.log("Error in fetching particular id")
        console.log(err.message)
    }
})


app.post('/addposts',middleware,async (req,res)=>{
    const {name,img,file,category,des} = req.body;
    try{
        const newData = new posts({name,img,file,category,des});
        await  newData.save();
        console.log("new post added")
        return res.json(await posts.find())
    }
    catch(err){
        console.log(err.message)
        console.log("Error in adding posts")

    }
})




app.delete('/deletepost/:id',middleware,async (req,res)=>{
    try {
        await posts.findByIdAndDelete(req.params.id)
        console.log("deleting particular id")
        return res.send(await posts.find())
    } catch (err) {
        console.log("Error in deleting particular id")
        console.log(err)
    }
})

app.put('/updatepost/:id',middleware,async (req,res)=>{
    try {
        await posts.findByIdAndUpdate(req.params.id,req.body)
        console.log(req.params.id)
        console.log("Updating particular id")
        return res.send(await posts.find())
    } catch (error) {
        console.log("Error in updating particular id")
        console.log(error.message)
    }
})


// 
app.post('/contact',middleware, async(req,res)=>{
    try{
        const {name,email,message} =req.body;
        if(!name || !email || !message){
            console.log("error in contact");
            return res.status(422).json({error:"Fill all contact fields"})
        }
        const userContact = await posts.findOne({_id:req.rootUserId});

        if(userContact){
            const userMessage =await userContact.addMessage(name,email,message);

            await userContact.save();
            res.status(201).json({message:"Message sent successfully"});
        }

    }catch(error){
        console.log(error);
    }
});
// 


// estalishing Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}
);








// const _ = require('lodash')
// const arr = [
//     {
//         name:"sunny",
//         age:1
//     },
//     {
//         name:"sunnytest",
//         age:2
//     }
// ]

// //        const img =  _.map(allDetails, i => _.pick(i, '_id', 'img','date'))  
       

// let mapped_array1 = _.map(arr, 'name');
  
// // Printing the output 
// console.log(mapped_array1);
       
// // Original array 
// var users = [
//   { 'user': 'jonny' },
//   { 'user': 'john' }
// ];
   
// // Use of _.map() method
// // The `_.property` iteratee shorthand
// let mapped_array = _.map(users, 'user');
  
// // Printing the output 
// console.log(mapped_array);