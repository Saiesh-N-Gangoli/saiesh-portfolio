import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='notfound-container'>
     <div className="image-container">
      <p className='aqua-color animated-404'>404</p>
      <div className="not-found-text">
        NOT FOUND
      </div>
      
     </div>
    <div className="text-container aqua-color">
      <p className='text-center fw-bold go-back' onClick={()=>navigate("/")}> Go Back to Home</p>
      <p className='text-center fw-bold'>THE PAGE YOU ARE LOOKING FOR DOESN'T EXIST</p>
      <p className='text-center fw-100'>YOU MAY HAVE MISTYPED THE ADDRESS OR THE PAGE MAY HAVE MOVED</p>
    </div>
    </div>
  )
}

export default NotFound
