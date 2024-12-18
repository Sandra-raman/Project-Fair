import React, { useContext, useEffect, useState } from 'react'
import ViewProject from '../Components/ViewProject'
import AddProject from '../Components/AddProject'
import UserProfile from '../Components/UserProfile'
import { AuthContextResponse } from '../../ContextAPI/AuthContext'

function Dashboard() {
  const [username,setusername]=useState("")
  const {isAuthorized,setIsAuthorized}=useContext(AuthContextResponse)
  
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsAuthorized(true)
  }
  else{
      setIsAuthorized(false)
  }
    setusername(sessionStorage.getItem("username"))
  },[isAuthorized])
  return (
    <div>
      <div className="row p-5">
        <span className='fs-1 m-3'>Welcome {username}</span>
      </div>
      <div className="row ms-2 p-5">
        <div className="col-8">
          <div className="row">
            <div className="col-6">
              <h4>My Projects</h4>
            </div>
            <div className="col-6">
              <AddProject/>
            </div>
            <div className="row pe-5">
              <ViewProject/>
            </div>
          </div>
        </div>
        <div className="col-4">
          <UserProfile/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard