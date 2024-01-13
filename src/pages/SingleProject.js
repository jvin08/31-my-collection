import React from 'react'
import Loading from '../components/Loading'
import { NavLink, useParams } from 'react-router-dom'
import data from '../Data'
import { BsTags } from "react-icons/bs";


const SingleProject = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [project, setProject] = React.useState(null);

  React.useEffect(()=>{
    setLoading(true);
    async function getProject(){
      try {
        const response = data[id]
        if(response){
          const {name,category,link,img:image,info,sources:tags} = response;
          const newProject = { name, category, link, image, info, tags};
          setProject(newProject);
        } else {
          setProject(null);
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }     
    getProject();
  },[id]);
  if(loading){
    return <Loading />
  }
  if(!project){
    return <h2 className='section-title'>no project to display</h2>
  }
  const { name, category, info, tags } = project;
  return (
    <section className='section project-section'>
      <NavLink to='/' className='btn btn-primary'>
        back home
      </NavLink>
      <h2 className='section-title'>{name}</h2>
      <div className='single-project'>
        <div className='single-project-info'>
          <h4>
            <span className='single-project-data'>name: </span>
            {name}
          </h4>
          <h4>
            <span className='single-project-data'>category: </span>
            {category}
          </h4>
          <h4>
            <span className='single-project-data'>info: </span>
            {info}
          </h4>
          <h4>
            <span className='single-project-data'>
              <BsTags/> tags 
            </span>
            {tags.map((item,index)=>{
              return (<NavLink key={index} to={item[1]}>
                
                  <span className='single-project-data-span tags'>{item[0]} </span>
                
                </NavLink>)
            })}
          </h4>
        </div>
      </div>
    </section>
  )
}

export default SingleProject
