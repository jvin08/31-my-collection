import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  // getting focus in input form
  React.useEffect(()=>{
    searchValue.current.focus()
  },[])

  const searchProject = ()=>{
    setSearchTerm(searchValue.current.value)
  }
 
  // prevent from reloading when user presses enter
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'> browse collection</label>
          <input 
            type="text" 
            id='name' 
            ref={searchValue}
            onChange={searchProject}
          ></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
