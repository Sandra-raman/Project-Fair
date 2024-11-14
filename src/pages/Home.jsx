import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'

function Home() {
  return (
    <div>
        <div className="row">
            <div className="col-6 text-center p-5 text-primary">
                <h1>PROJECT FAIR</h1>
                <h4 className='text-info mt-3'>A destination for all Software Development Projects</h4>
                <p className='mt-3'>This free online Project Management Theory and Practices course will give you a brief overview of the project management knowledge and the skills needed to become a successful project manager. Project management is the application of knowledge, skills, tools, and techniques relating to getting projects completed to making sure that complex projects are completed on time, and in budget to client specifications.</p>
                <Link to={'/login'}>
                <button className='btn btn-primary mt-4'>Get Started</button>
                </Link>
            </div>
            <div className="col-6 ">
                <img src="https://media.istockphoto.com/id/1255572283/vector/boy-with-laptop-happy-man-well-being-businessman-creative-people-working-at-home-office.jpg?s=612x612&w=0&k=20&c=fIgnO0OcdkWklqw43yGTDxEkLhL5VnR1EGZ3QbusVYA=" alt="developer img" />
            </div>
        </div>
        
        <div className='p-5'>
          <h3>Explore Our Projects</h3>
          <div className="row m-4">
            <div className="col-4">
              <ProjectCard/>
            </div>
            <div className="col-4">
            <ProjectCard/>
            </div>
            <div className="col-4">
            <ProjectCard/>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <Link to={'/Projects'}>
          <button className='btn'>View Projects</button>
          </Link>
        </div>
    </div>
  )
}

export default Home