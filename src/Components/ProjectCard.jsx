import React, { useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function ProjectCard() {
  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);

  return (
    <div>
       <MDBCard onClick={toggleOpen}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/05/project-management-computer-screen.jpeg.jpg' fluid alt='...' className='p-1 rounded' />
        <a>
          <div className='mask ' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='text-center'>Project title</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
    <MDBModal tabIndex='-1' open={centredModal} onClose={() => setCentredModal(false)}>
        <MDBModalDialog centered size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Project title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="row">
                <div className="col-6">
                  <MDBCardImage src='https://content.techgig.com/thumb/msid-78949110,width-860,resizemode-4/9-Best-programming-project-ideas-for-beginners-to-level-up-their-coding-skills.jpg?119058' height={'325px'} width={'360px'}/>
                </div>
                <div className="col-6 mb-3">
                  <h3>Description</h3>
                  <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <h3>Technologies</h3>
                  <p>React,Node</p>
                  <h4>View On</h4>
                  <MDBBtn color='info'className='mx-2' onClick={toggleOpen}>
                  <FaGithub />
              </MDBBtn>
              <MDBBtn color='info' onClick={toggleOpen}>
              <FaLink />
              </MDBBtn>
                </div>
              </div>
             
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default ProjectCard