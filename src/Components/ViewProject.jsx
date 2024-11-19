import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

function ViewProject() {
  return (
    <div>
      <div className="row shadow mt-5 rounded">
        <div className="col-6">
        <h5 className='p-3'>Project name</h5>
        </div>
        <div className="col-4 d-flex p-3 ">
          <p><FaExternalLinkAlt className='fs-5 text-info'/></p>
          <p><FaGithub className='mx-2 fs-4'/></p>
          <p><RiDeleteBin5Line className='fs-4 text-danger'/></p>
        </div>
        <div className="col-2 p-2">
          <button className='btn text-center'><FiEdit className='fs-4 text-success '/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewProject