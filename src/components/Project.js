import React from 'react'
import { NavLink } from 'react-router-dom'

const Project = ({image,name, link, id,date, category}) => {
  
  return (
    
    <article className='project'>
      
        <div className='img-container'>
          <NavLink to={link}>
            <img src={image} alt={name} />
          </NavLink>
        </div>
 
      <div className='project-footer'>
        <h4>{name}</h4>
        <p>{category}</p>
        <p>{date}</p>
        <NavLink to={`/project/${id}`} className="btn btn-primary">
          details
        </NavLink>
      </div>
    </article>
  )
}

export default Project
