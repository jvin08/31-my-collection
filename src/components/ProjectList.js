import React from 'react'
import Project from './Project'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const ProjectList = () => {
  const { projects, loading } = useGlobalContext();

  if (loading) {
    return <Loading />
  }
  if (projects.length < 1) {
    return (
      <h2 className='section-title'>
        no projects match your search criteria
      </h2>
    )
  }

  return (
    <section className='section'>
      <h2 className='section-title'>
        projects
      </h2>
      <div className='projects-center'>
        {projects.map((item)=>{
          return <Project key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default ProjectList

