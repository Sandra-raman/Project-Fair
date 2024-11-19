import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { IoMdCloudUpload } from "react-icons/io";

function AddProject() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <div className="col-6">
            <label>
              <input type='file' style={{display:'none'}}/>
              <img src="https://png.pngtree.com/png-clipart/20231016/original/pngtree-professional-web-developer-3d-illustration-png-image_13322705.png" alt="" height={'400px'} width={'400px'} />
            </label>
            <p className='text-danger'>*Only allows following file types .jpg, .png, .jpeg</p>
          </div>
          <div className="col-6">
          <FloatingLabel
        controlId="floatingInput"
        label="Title"
        className="mb-3">
        <Form.Control type="Text" placeholder="Title" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Language"
        className="mb-3">
        <Form.Control type="text" placeholder="Language" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="GitHub"
        className="mb-3">
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Website"
        className="mb-3">
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject