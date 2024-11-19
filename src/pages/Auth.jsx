import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/developer-illustration-download-in-svg-png-gif-file-formats--html-logo-c-plus-business-concept-pack-illustrations-3560991.png?f=webp" alt="" />
        </div>
        <div className="col-6 ">
          <h3 className='my-4 text-center'>Project Fair</h3>
          <h4 className='mb-3 ms-2'>Sign{
            register?"Up":"In"}</h4>
            {
              register && <input type="text" placeholder='Username' className='form-control mb-3'/>

            }
          <input type="email" placeholder='Email' className='form-control mb-3'/>
          <input type="password" placeholder='password' className='form-control mb-3'/>
          
         {
          register?
          <div className='text-center'>
          <button className='btn btn-info mb-3'>SignUp</button>
          <p>Already Register? <Link to={'/login'}>Login Now</Link></p>
        </div>
        :
        <div className='text-center'>
        <button className='btn btn-info mb-3'>SignIn</button>
        <p>New here? <Link to={'/register'}>Register Now</Link></p>
      </div>
         }
        </div>
      </div>
    </div>
  )
}

export default Auth