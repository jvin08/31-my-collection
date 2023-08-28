import React, { useState, useContext, useEffect } from 'react'
import data from './Data'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState([]);

  const searchByNameBeginning = (arr, nameBeginning) => {
    let pattern = /^\s*$/;
  if(nameBeginning.match(pattern)) {
      return arr
    } else {
      return arr.filter((obj) => obj.name.startsWith(nameBeginning));
    }
  }
  
  const fetchProjects = () => {
    setLoading(true)
    try {
      const newData = searchByNameBeginning(data, searchTerm);
      if(newData.length > 0) {
        const newProjectsList = newData.map((item)=>{
        const { 
          id, 
          name, 
          category, 
          link,
          img,
          sources, 
          date 
        } = item;
        return { 
          id, 
          name, 
          category, 
          link,
          image:img, 
          tags:sources,
          date 
        }
        })
        setProjects(newProjectsList)
      } else {
        setProjects([]);
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchProjects();
  },[searchTerm])

  return <AppContext.Provider 
  value={{
    loading,
    projects,
    setSearchTerm,
  }}
  >
    {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
