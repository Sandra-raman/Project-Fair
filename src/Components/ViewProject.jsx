import React, { useContext, useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteProjectAPI, getUserProjectAPI } from "../../Services/allAPI";
import { addProjectContextResponse, EditProjectContextResponse } from "../../ContextAPI/ContextShare";
import EditProject from "./EditProject";

function ViewProject() {
  const { addProjectContext, setaddProjectContext } = useContext(
    addProjectContextResponse
  );
  const { editContext, seteditContext } = useContext(
    EditProjectContextResponse
  );

  const [token, settoken] = useState("");
  const [projectDetails, setprojectDetails] = useState([]);

  const getUserProject = async () => {
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-json",
        "Authorization": `Bearer ${token}`,
      };
      console.log(reqHeader);
      try {
        const response = await getUserProjectAPI(reqHeader);
        console.log(response);
        setprojectDetails(response.data);
      } 
      catch (error) {
        console.log(error);
      }
    }
  };
  console.log(projectDetails);

  const handledelete=async(projectId)=>
  {
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-json",
        "Authorization": `Bearer ${token}`,
      };
   try {
    const deleteProject=await deleteProjectAPI(projectId,reqHeader)
    console.log(deleteProject);
    alert("Project Deleted")
    window.location.reload()
    
   } 
   catch (err) {
    console.log(err);
    
   }
  }
  }
  useEffect(() => {
    settoken(sessionStorage.getItem("token"));
    getUserProject();
  }, [token, addProjectContext,editContext]);

  return (
    <div>
      <div className="row p-4 me-5 d-flex mt-5">
        {projectDetails.length > 0
          ? projectDetails.map((project) => (
              <div className="d-flex justify-content-between border m-3 p-3">
                <h5 className="p-3">{project.title}</h5>

                <div className="col-4 d-flex  ">
                  <p>
                    <FaExternalLinkAlt className="fs-5 text-info" />
                  </p>
                  <p>
                    <FaGithub className="mx-2 fs-4" />
                  </p>
                  <p>
                    <RiDeleteBin5Line className="fs-4 text-danger me-2" onClick={()=>handledelete(project._id)}/>
                  </p>
                  <div className="col-2 ">
                    <EditProject project={project}/>
                  </div>
                </div>
              </div>
            ))
          : "No projects"}
      </div>
    </div>
  );
}

export default ViewProject;
