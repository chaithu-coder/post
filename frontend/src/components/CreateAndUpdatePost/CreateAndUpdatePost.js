import React, { useEffect, useState , useContext} from 'react';
import axios from 'axios'
import { Container, Form, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader'
import {Button, Typography } from '@mui/material';
import { store } from '../../App';
import FileBase64  from 'react-file-base64'

const CreateAndUpdatePost = () => {
    const [token,setToken] = useContext(store);
    const [text,setText] = useState(true)
    const {id} = useParams()
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
      name:"",
        img:"",
        file:"",
        category:"",
        des:""
    })
  const [img,setImg] = useState("")
  const [loading, setLoading] = useState(false);
  const[file,setFile] = useState("")

      const handleChange =async (e)=>{
        await setFormData({ ...formData, [e.target.name]: e.target.value,img,file}) 
        console.log(formData)
    }
    const handleSubmit =async (e)=>{
      e.preventDefault()
              if(id){
              await  axios.put(`http://localhost:8000/updatepost/${id}`,formData,{
                headers:{
                    'x-token':token
                  }
              })
                .then(res=>navigate('/posts'))
                .catch(err=>console.log(err))
                setLoading(true)

              }
              else{
              e.preventDefault()
            await axios.post('http://localhost:8000/addposts',formData,{
                headers:{
                    'x-token':token
                  }
            })
              .then(res=>{
                alert('success')
                navigate('/posts')})
              .catch(err=>{
                alert('failed')
                
                console.log(err)})
              setLoading(true)

          }
    }
    const getUsers = async () => {
        const users = await axios.put(`http://localhost:8000/updatepost/${id}`,{
            headers:{
                'x-token':token
              }
        });
        setFormData(users.data);
        setLoading(true)
       };
    useEffect(()=>{
        if(token === null) {
            navigate('/login')
          } 
          if(token){
                if(id){
                getUsers()
                document.title = "Edit POST"
                }
                else{
                document.title = "Create POST"
                }
    }
    },[id])

  return (
    <>    
  <Container>
            <Form onSubmit={handleSubmit}>
              <FormGroup >
                    <Label>Name</Label>
                    <Input name='name' value={formData.name} placeholder='Name' type='text' onChange={handleChange}/>
                </FormGroup>
               
                <FormGroup>
                    <Label>category</Label>
                    <Input name='category' value={formData.category} placeholder='category' type='text' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Des</Label>
                    <Input name='des' value={formData.des} placeholder='des' type='text' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>img</Label>
                    <FileBase64 type="file" name='img' multiple={false} onDone={({base64}) => setImg( base64)}  onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>{id?"Change " :"Set" } Pdf </Label>
                    <FileBase64 type="file" name='file' multiple={false} onDone={({base64}) => setFile( base64)} onChange={handleChange}/>
                </FormGroup>
            <Button variant='contained'  type='submit'>Submit</Button>
            </Form>
        </Container> 
    </>
  )
}



export default CreateAndUpdatePost

// import React from 'react'

// const CreateAndUpdatePost = () => {
//   return (
//     <div>CreateAndUpdatePost</div>
//   )
// }

// export default CreateAndUpdatePost



// {
//   "name": "dcs",
//   "file": "",
//   "category": "cd",
//   "des": "",
//   "img": "data:image/jpeg;base64,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"
// }

// {
//   "name": "dsd",
//   "category": "dwe",
//   "des": "de",
//   "img": "data:image/jpeg;base64,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",
// }