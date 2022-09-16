import React,{useContext,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {store} from '../../App'

const Navbar = () => {
  const navigate = useNavigate()
  const [token,setToken] = useContext(store);
  const handleLogout = ()=>{
    setToken(null)
    // remove the token from local storage
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <>
        {/* <nav class="navbar navbar-expand-lg bg-light">
                  <div class="container-fluid">
                    <p class="navbar-brand" >Navbar</p>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0"> */}
                      {
                        token  &&
                        
                        <>
                        <nav class="navbar navbar-expand-lg bg-light">
                  <div class="container-fluid">
                    <p class="navbar-brand" >Navbar</p>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link text-dark" to="/" >Home</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" to="/posts" >Posts</Link></li>
                        <li className="nav-item cursor-pointer" onClick={handleLogout} >logout</li>
                        </ul>
                    </div>
                  </div>
                    </nav>
                        </>
                      }
              {/* </ul>
            </div>
          </div>
        </nav> */}
    </>
  )
}

export default Navbar



