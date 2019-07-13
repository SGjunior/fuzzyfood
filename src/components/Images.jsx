import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FaBeer } from 'react-icons/fa';

export default props =>
  props.images.map((image, i) =>
    <div key={i} className='fadein'>
      <div
        onClick={() => props.removeImage(image.public_id)}
        className='delete'
      >
         { /* <FontAwesomeIcon icon={faTimesCircle} size='2x' /> */ }
         <FaBeer />
      </div>
      <img src={image.secure_url} alt='' />
    </div>
  )
