import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MDBContainer, MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";
import ProjectCard from "../Components/ProjectCard";
import { getAllUserProjectAPI } from "../../Services/allAPI";
function Projects() {
  const [token, setToken] = useState("");
  const [allUserProject, setallUserProject] = useState([]);
  const getAllUserProject = async () => {
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-json",
        Authorization: `Bearer ${token}`,
      };

      console.log(reqHeader);
      //api call
      const response = await getAllUserProjectAPI(reqHeader);
      console.log(response);
      setallUserProject(response.data);
    }
  };
  console.log(allUserProject);

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
    getAllUserProject();
  }, [token]);

  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <h1 className="p-3" id="project">
            ALL PROJECTS
          </h1>
          <MDBContainer fluid>
            <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
              <input
                className="form-control"
                placeholder="Search by Technology"
                aria-label="Search"
                type="Search"
              />
              <MDBBtn outline>
                <FaSearch />
              </MDBBtn>
            </MDBInputGroup>
          </MDBContainer>
        </div>
        <div className="row m-4">
          {allUserProject.length > 0
            ? allUserProject.map((project) => (
                <div className="col-4">
                  <ProjectCard project={project} />
                </div>
              ))
            : "No projects found"}
        </div>
      </div>
    </div>
  );
}

export default Projects;
