import React from 'react'
import { FaSearch } from "react-icons/fa";
import {
  MDBContainer,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
function Projects() {
  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <h1 className='p-3' id='project'>ALL PROJECTS</h1>
          <MDBContainer fluid>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Search by Technology" aria-label="Search" type='Search' />
          <MDBBtn outline><FaSearch /></MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
        </div>
      </div>
    </div>
  )
}

export default Projects