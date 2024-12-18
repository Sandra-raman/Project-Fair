import React, { useContext } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { MdComputer } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { AuthContextResponse } from '../../ContextAPI/AuthContext';

function Header() {
  const navigate=useNavigate()
  const {isAuthorized,setIsAuthorized}=useContext(AuthContextResponse)
  const handlelogout=()=>{
    sessionStorage.clear()
    navigate('/login')
    window.location.reload()
  }
  return (
    <div className='mb-4'>
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <MdComputer className='fs-2 text-primary m-2'/>
            <h2 className='fs-2 ms-3 text-info'><span>project fair</span></h2>
          </MDBNavbarBrand>
          {
            isAuthorized?<button className='btn btn-danger ' onClick={handlelogout}>LogOut</button>:" "
          }
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header