import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { IoMdCloudUpload } from "react-icons/io";
import { AddProjectAPI } from '../../Services/allAPI';

function AddProject() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[ProjectDetails,setProjectDetails]=useState({
    title:"",
    language:"",
    github:"",
    website:"",
    overview:"",
    ProjectImg:""
  })
  const [Preview,setPreview]=useState("")

  const handleAddProject=async()=>{
    console.log(ProjectDetails);
    const{title,language,github,website,overview,ProjectImg}=ProjectDetails
    if(!title||!language||!github||!website||!overview||!ProjectImg){
      alert("Please fill the form")
    }
    else{
      //Api call
      const reqBody=new FormData()
      reqBody.append("title",title)
      reqBody.append("language",language)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overview",overview)
      reqBody.append("ProjectImg",ProjectImg)

      const token=sessionStorage.getItem("token")
      console.log(token);
      if(token){
        const reqHeader={
          "Content-Type":"multipart/form-json",
          "Authorization":`Bearer ${token}`
        }

        try {
          const response=await AddProjectAPI(reqBody,reqHeader)
          console.log(response);
          if(response.status==200){
            alert("Project added successfully...")
            handleClose()
            setProjectDetails({
              title:"",
              language:"",
              github:"",
              website:"",
              overview:"",
              ProjectImg:""
            })
            //set preview
          }
          else{
            alert(response.response.data)
          }
        } catch (error) {
          console.log(error);
          
        }
      }
    }
    
  }
  useEffect(()=>{
    if(ProjectDetails.ProjectImg){
      setPreview(URL.createObjectURL(ProjectDetails.ProjectImg))
    }
  },[ProjectDetails.ProjectImg])

  return (
    <div>
       <Button variant="primary" onClick={handleShow}>
        Upload<IoMdCloudUpload className=' fs-4 ms-2'/>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col-6 p-4">
            <label>
              <input onChange={e=>setProjectDetails({...ProjectDetails,ProjectImg:e.target.files[0]})} type='file' style={{display:'none'}}/>
              <img src={Preview?Preview:"https://png.pngtree.com/png-clipart/20231016/original/pngtree-professional-web-developer-3d-illustration-png-image_13322705.png"} alt="" height={'400px'} width={'400px'} />
            </label>
            <p className='text-danger'>*Only allows following file types .jpg, .png, .jpeg</p>
          </div>
          <div className="col-6">
          <FloatingLabel
        controlId="floatingInput"
        label="Title"
        className="mb-3">
        <Form.Control onChange={e=>setProjectDetails({...ProjectDetails,title:e.target.value})} type="Text" placeholder="Title" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Language"
        className="mb-3">
        <Form.Control  onChange={e=>setProjectDetails({...ProjectDetails,language:e.target.value})} type="text" placeholder="Language" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="GitHub"
        className="mb-3">
        <Form.Control  onChange={e=>setProjectDetails({...ProjectDetails,github:e.target.value})} type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Website"
        className="mb-3">
        <Form.Control  onChange={e=>setProjectDetails({...ProjectDetails,website:e.target.value})} type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Overview"
        className="mb-3"
      >
        <Form.Control as="textarea" onChange={e=>setProjectDetails({...ProjectDetails,overview:e.target.value})} placeholder="Leave a comment here" />
      </FloatingLabel>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddProject} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject