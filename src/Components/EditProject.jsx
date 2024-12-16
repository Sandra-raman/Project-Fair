import { FiEdit } from "react-icons/fi";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { EditProjectAPI } from "../../Services/allAPI";
import { ServerUrl } from "../../Services/ServerUrl";
import { EditProjectContextResponse } from "../../ContextAPI/ContextShare";

function EditProject({ project }) {
  const { editContext, seteditContext } = useContext(
    EditProjectContextResponse
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ProjectDetails, setProjectDetails] = useState({
    id: project._id,
    title: project.title,
    language: project.language,
    github: project.github,
    website: project.website,
    overview: project.overview,
    projectImg: "",
  });
  const [Preview, setPreview] = useState("");

  //edit api function
  const handleEditProject = async () => {
    console.log(ProjectDetails);
    const { id, title, language, github, website, overview, projectImg } =
      ProjectDetails;
    //creation of body
    const reqBody = new FormData();
    reqBody.append("id", id),
      reqBody.append("title", title),
      reqBody.append("language", language),
      reqBody.append("github", github),
      reqBody.append("website", website),
      reqBody.append("overview", overview),
      Preview
        ? reqBody.append("projectImg", projectImg)
        : reqBody.append("projectImg", project.projectImg);

    const token = sessionStorage.getItem("token");
    console.log(token);
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-json",
        "Authorization": `Bearer ${token}`,
      };
      console.log(reqHeader);
      //api calling
      try {
        const response = await EditProjectAPI(id, reqBody, reqHeader);
        console.log(response);
        // setaddProjectContext(response.data)
        if (response.status == 200) {
          seteditContext(response.data)
          alert("project Updated");
          // seteditProjectContext(response.data);
          handleClose();

          //set preview
        } else {
          alert(response.response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  //useEffect
  useEffect(() => {
    if (ProjectDetails.projectImg) {
      setPreview(URL.createObjectURL(project.projectImg));
    }
  }, [ProjectDetails.projectImg]);

  return (
    <div>
      <FiEdit className="fs-4 text-success " onClick={handleShow} />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6 p-2">
              <label>
                <input
                  onChange={(e) =>
                    setProjectDetails({
                      ...ProjectDetails,
                      ProjectImg: e.target.files[0]
                    })
                  }
                  type="file"
                  style={{ display: "none" }}
                />
                <img
                  src={
                    Preview
                      ? Preview
                      :`${ServerUrl}/Uploads/${ProjectDetails.projectImg}`
                  }
                  alt=""
                  height={"350px"}
                  width={"350px"}
                />
              </label>
              <p className="text-danger">
                *Only allows following file types .jpg, .png, .jpeg
              </p>
            </div>
            <div className="col-6">
              <FloatingLabel
                controlId="floatingInput"
                label="Title"
                className="mb-3"
              >
                <Form.Control
                  value={ProjectDetails.title}
                  onChange={(e) =>
                    setProjectDetails({
                      ...ProjectDetails,
                      title: e.target.value,
                    })
                  }
                  type="Text"
                  placeholder="Title"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Language"
                className="mb-3"
              >
                <Form.Control
                  value={ProjectDetails.language}
                  onChange={(e) =>
                    setProjectDetails({
                      ...ProjectDetails,
                      language: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Language"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="GitHub"
                className="mb-3"
              >
                <Form.Control
                  value={ProjectDetails.github}
                  onChange={(e) =>
                    setProjectDetails({
                      ...ProjectDetails,
                      github: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Website"
                className="mb-3"
              >
                <Form.Control
                  value={ProjectDetails.website}
                  onChange={(e) =>
                    setProjectDetails({
                      ...ProjectDetails,
                      website: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Overview"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  value={ProjectDetails.overview}
                  onChange={(e) =>
                    setProjectDetails({
                      ...ProjectDetails,
                      overview: e.target.value,
                    })
                  }
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditProject}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditProject;
