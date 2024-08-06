import React from 'react'
import './card.css'
const Card = ({
  image, title, subtitle, description, onProfile, onFollow
}) => {
  return (
    <div className='card'>
      <img src={image} alt='swetha' />
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <div className="buttons">
          <button onClick={onProfile}>
            Profile
          </button>
          <button onClick={onFollow} className='primary'>
            Follow
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;
