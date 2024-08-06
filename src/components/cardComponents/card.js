import React from 'react'
import './card.css'
const Card = ({
  image, title, subtitle, description, onResume, onLike, heart
}) => {
 
  return (
    <div className='card'>
      <img src={image} alt='swetha' />
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <div className="buttons">
          <button onClick={onResume}>
            Resume
          </button>
          <button onClick={onLike} className='primary'>
            {heart}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;
