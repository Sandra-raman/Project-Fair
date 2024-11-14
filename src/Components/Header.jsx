import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { MdComputer } from "react-icons/md";

function Header() {
  return (
    <div className='mb-4'>
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <MdComputer className='fs-2 text-primary m-2'/>
            <h2 className='fs-2 ms-3 text-info'><span>project fair</span></h2>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header