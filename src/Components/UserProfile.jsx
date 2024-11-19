import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { BiCollapseVertical } from "react-icons/bi";
function UserProfile() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        View Details  <BiCollapseVertical className='ms-2'/>
      </Button>
      <Collapse in={open}>
        <div className='text-center'>
          <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" height={'150px'} width={'150px'} style={{margin:'20px', marginTop:'40px'}}/>
          <input type="text" placeholder='Username' className='form-control mt-3' />
          <input type="text" placeholder='LinkedIn' className='form-control mt-3' />
          <input type="text" placeholder='GitHub' className='form-control mt-3' />
          <button className='btn btn-primary mt-3'>Update</button>
        </div>
      </Collapse>
    </div>
  )
}

export default UserProfile